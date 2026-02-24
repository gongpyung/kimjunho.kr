#!/usr/bin/env node

import { spawn } from "node:child_process";

const ROUTE_CONFLICT_PATTERN = /conflicts with higher priority route/;

const commands = [
  {
    label: "Biome check",
    command: "npm",
    args: ["run", "check"],
  },
  {
    label: "Astro build",
    command: "npm",
    args: ["run", "build"],
  },
];

const runCommand = ({ command, args, label }) =>
  new Promise((resolve) => {
    const child = spawn(command, args, {
      env: process.env,
      shell: process.platform === "win32",
      stdio: ["inherit", "pipe", "pipe"],
    });

    let output = "";

    const forward = (targetStream) => (chunk) => {
      const text = chunk.toString();
      output += text;
      targetStream.write(text);
    };

    child.stdout.on("data", forward(process.stdout));
    child.stderr.on("data", forward(process.stderr));

    child.on("close", (code) => {
      resolve({ code: code ?? 1, output, label });
    });
  });

const findRouteConflicts = (output) =>
  Array.from(
    new Set(
      output
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter((line) => ROUTE_CONFLICT_PATTERN.test(line)),
    ),
  );

let buildOutput = "";

for (const command of commands) {
  const { code, output, label } = await runCommand(command);

  if (label === "Astro build") {
    buildOutput = output;
  }

  if (code !== 0) {
    console.error(`\n[verify] ${label} failed with exit code ${code}.`);
    process.exit(code);
  }
}

const conflicts = findRouteConflicts(buildOutput);

if (conflicts.length > 0) {
  const preview = conflicts.slice(0, 10);
  console.error(`\n[verify] Route conflict guard failed (${conflicts.length} conflict warnings detected).`);
  preview.forEach((line) => console.error(`- ${line}`));

  if (conflicts.length > preview.length) {
    console.error(`- ...and ${conflicts.length - preview.length} more`);
  }

  process.exit(1);
}

console.log("\n[verify] Passed: check + build + route conflict guard.");
