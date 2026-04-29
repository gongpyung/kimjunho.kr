const hotel = {
  name: "Meriton Suites Kent Street, Sydney",
  displayName: "메리톤 켄트 스트리트",
  query: "Meriton Suites Kent Street Sydney 528 Kent Street",
  lat: -33.8759,
  lng: 151.20588,
};

const days = [
  {
    id: "day-1",
    number: 1,
    date: "4/30",
    title: "도착, 북부 해안 산책, 장보기",
    summary: "공항 도착 후 체크인, McMahons Point 주변 산책, 월드스퀘어 장보기",
    travelMode: "walking",
    stops: [
      {
        time: "09:55",
        name: "시드니 공항",
        category: "공항",
        query: "Sydney Airport",
        lat: -33.9498935,
        lng: 151.1819682,
        note: "공항 도착. 호텔 체크인은 12시쯤 예상",
        tags: ["택시 15분"],
      },
      {
        time: "12:00",
        name: "메리톤 켄트 스트리트",
        category: "호텔",
        query: hotel.query,
        lat: hotel.lat,
        lng: hotel.lng,
        note: "짐 정리와 체크인",
        tags: ["숙소"],
      },
      {
        time: "13:30",
        name: "Piato Restaurant",
        category: "점심",
        query: "Piato Restaurant 123 Blues Point Road McMahons Point Sydney",
        lat: -33.8445917,
        lng: 151.2044101,
        note: "파스타 또는 근처 피자집. 예약 완료",
        tags: ["예약", "택시 14분", "버스 20분"],
        booked: true,
      },
      {
        time: "15:10",
        name: "Quibaree Park",
        category: "공원",
        query: "Quibaree Park Lavender Bay Sydney",
        lat: -33.8441677,
        lng: 151.2069517,
        note: "식사 후 짧게 걷기 좋은 포인트",
        tags: ["도보 5분"],
      },
      {
        time: "15:30",
        name: "Clark Park Viewpoint",
        category: "전망",
        query: "Clark Park Viewpoint Lavender Bay Sydney",
        lat: -33.8439235,
        lng: 151.2091271,
        note: "앵무새 공원 쪽 전망 포인트",
        tags: ["도보 4분"],
      },
      {
        time: "16:00",
        name: "Bay Ten Espresso",
        category: "카페",
        query: "Bay Ten Espresso Middlemiss Street Lavender Bay Sydney",
        lat: -33.8431435,
        lng: 151.21048,
        note: "산책 중 커피 휴식",
        tags: ["도보 4분"],
      },
      {
        time: "19:00",
        name: "Coles World Square",
        category: "마트",
        query: "Coles World Square Sydney",
        lat: -33.8770719,
        lng: 151.2071568,
        note: "밤 11시 30분까지. 호텔에서 먹을 것 장보기",
        tags: ["택시 13분", "버스 22분"],
      },
      {
        time: "선택",
        name: "The Baxter Inn",
        category: "바",
        query: "The Baxter Inn Clarence Street Sydney",
        lat: -33.8697467,
        lng: 151.2055275,
        note: "호텔에 짐을 두고 근처 칵테일바",
        tags: ["도보 10분", "선택"],
      },
      {
        time: "선택",
        name: "Ramblin Rascal Tavern",
        category: "바",
        query: "Ramblin Rascal Tavern Basement 60 Park Street Sydney",
        lat: -33.87341,
        lng: 151.2107927,
        note: "호텔 근처 칵테일바 대안",
        tags: ["도보 4분", "선택"],
      },
      {
        time: "밤",
        name: "메리톤 켄트 스트리트",
        category: "호텔",
        query: hotel.query,
        lat: hotel.lat,
        lng: hotel.lng,
        note: "호텔 귀가",
        tags: ["도보 5분"],
      },
    ],
  },
  {
    id: "day-2",
    number: 2,
    date: "5/1",
    title: "블루 마운틴 투어",
    summary: "가이드 여행. 미리 예약한 일정 중심으로 이동",
    travelMode: "driving",
    stops: [
      {
        time: "종일",
        name: "Blue Mountains",
        category: "투어",
        query: "Blue Mountains National Park NSW Australia",
        lat: -33.6190685,
        lng: 150.487634,
        note: "가이드 여행. 픽업 시간과 장소는 예약 내역 확인",
        tags: ["미리 예약", "가이드 여행"],
        booked: true,
      },
    ],
  },
  {
    id: "day-3",
    number: 3,
    date: "5/2",
    title: "브런치, QVB, 미술관, 저녁 예약",
    summary: "도심 쇼핑과 미술관, 세인트 메리 대성당, 스테이크 저녁",
    travelMode: "walking",
    stops: [
      {
        time: "10:00",
        name: "Rustic Board Cafe",
        category: "브런치",
        query: "Rustic Board Cafe 121 Walker Street North Sydney",
        lat: -33.8388647,
        lng: 151.2091675,
        note: "아침 브런치",
        tags: ["도보 4분"],
      },
      {
        time: "11:30",
        name: "Queen Victoria Building",
        category: "쇼핑",
        query: "Queen Victoria Building Sydney",
        lat: -33.8714355,
        lng: 151.2066693,
        note: "쇼핑몰 구경. 근처에서 점심",
        tags: ["택시 9분", "버스 20분"],
      },
      {
        time: "14:00",
        name: "Art Gallery of New South Wales",
        category: "미술관",
        query: "Art Gallery of New South Wales Sydney",
        lat: -33.8686067,
        lng: 151.2174176,
        note: "입장료 무료. 오후 5시까지. 2시까지 도착해서 관람",
        tags: ["택시 6분", "버스 21분", "도보 19분", "무료"],
        free: true,
      },
      {
        time: "15:00",
        name: "Bohaus Cafe129",
        category: "카페",
        query: "Bohäus Cafe 129 Cathedral Street Woolloomooloo Sydney",
        lat: -33.8728672,
        lng: 151.2198439,
        note: "미술관 관람 후 카페 휴식",
        tags: ["도보 10분"],
      },
      {
        time: "16:30",
        name: "St Mary's Cathedral",
        category: "성당",
        query: "St Mary's Cathedral Sydney",
        lat: -33.8712586,
        lng: 151.2133632,
        note: "입장료 무료. 저녁 6시 30분까지. 4시 30분-5시 사이 도착",
        tags: ["도보 8분", "무료"],
        free: true,
      },
      {
        time: "18:00",
        name: "The Meat & Wine Co Sydney CBD",
        category: "저녁",
        query: "The Meat & Wine Co Sydney CBD 219-223 Castlereagh Street Sydney",
        lat: -33.8755236,
        lng: 151.2087142,
        note: "스테이크 저녁. 6시 예약",
        tags: ["예약", "도보 11분"],
        booked: true,
      },
      {
        time: "밤",
        name: "메리톤 켄트 스트리트",
        category: "호텔",
        query: hotel.query,
        lat: hotel.lat,
        lng: hotel.lng,
        note: "호텔 귀가",
        tags: ["도보 3분"],
      },
    ],
  },
  {
    id: "day-4",
    number: 4,
    date: "5/3",
    title: "자유여행",
    summary: "현지 컨디션에 맞춰 여유롭게 이동",
    travelMode: "walking",
    stops: [
      {
        time: "자유",
        name: "Sydney CBD",
        category: "자유",
        query: "Sydney CBD Australia",
        lat: -33.8747234,
        lng: 151.2053644,
        note: "날씨와 컨디션에 맞춰 자유 일정",
        tags: ["자유여행"],
      },
    ],
  },
  {
    id: "day-5",
    number: 5,
    date: "5/4",
    title: "자유여행",
    summary: "전날 못 본 곳이나 쇼핑, 카페 일정으로 조정",
    travelMode: "walking",
    stops: [
      {
        time: "자유",
        name: "Darling Harbour",
        category: "자유",
        query: "Darling Harbour Sydney",
        lat: -33.8675516,
        lng: 151.1995619,
        note: "호텔과 가까운 자유 일정 후보",
        tags: ["자유여행"],
      },
    ],
  },
  {
    id: "day-6",
    number: 6,
    date: "5/5",
    title: "귀국",
    summary: "출발 3시간 전 공항 도착 목표",
    travelMode: "driving",
    stops: [
      {
        time: "08:30",
        name: "시드니 공항",
        category: "공항",
        query: "Sydney Airport",
        lat: -33.9498935,
        lng: 151.1819682,
        note: "3시간 전 공항 도착 목표. 시드니 11시 30분 출발, 한국 21시 30분 도착",
        tags: ["공항 도착", "11:30 출발"],
      },
    ],
  },
];

const dayList = document.querySelector("#dayList");
const dayNav = document.querySelector(".day-nav");
const mapFrame = document.querySelector("#mapFrame");
const mapTitle = document.querySelector("#mapTitle");
const mapOpenLink = document.querySelector("#mapOpenLink");
const mapDetails = document.querySelector("#mapDetails");
const openHotelMap = document.querySelector("#openHotelMap");
const mobileInlineMap = window.matchMedia("(max-width: 720px)");
let activeInlineMap = null;

const encode = (value) => encodeURIComponent(value);

function googleSearchUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encode(query)}`;
}

function googleEmbedUrl(query) {
  return `https://maps.google.com/maps?q=${encode(query)}&output=embed`;
}

function googleRouteUrl(stops, travelMode = "walking") {
  const routeStops = stops.filter((stop) => stop.query);

  if (routeStops.length === 0) {
    return googleSearchUrl(hotel.query);
  }

  if (routeStops.length === 1) {
    return googleSearchUrl(routeStops[0].query);
  }

  const origin = routeStops[0].query;
  const destination = routeStops[routeStops.length - 1].query;
  const waypoints = routeStops
    .slice(1, -1)
    .map((stop) => stop.query)
    .join("|");

  const params = new URLSearchParams({
    api: "1",
    origin,
    destination,
    travelmode: travelMode,
  });

  if (waypoints) {
    params.set("waypoints", waypoints);
  }

  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

function tagClass(tag, stop) {
  if (stop.booked || tag.includes("예약")) return "tag is-booked";
  if (stop.free || tag.includes("무료") || tag.includes("자유")) return "tag is-free";
  return "tag";
}

function mapDetailsMarkup(day, stop) {
  return `
    <h3 class="map-details__title">${day.date} · ${stop.category}</h3>
    <p class="map-details__text">${stop.note}</p>
    <div class="tag-row">
      ${stop.tags.map((tag) => `<span class="${tagClass(tag, stop)}">${tag}</span>`).join("")}
    </div>
    <div class="map-actions">
      <a class="place-link" href="${googleSearchUrl(stop.query)}" target="_blank" rel="noreferrer">장소 열기</a>
      <a class="place-link" href="${googleRouteUrl([hotel, stop])}" target="_blank" rel="noreferrer">숙소에서 길찾기</a>
      <a class="place-link" href="${googleRouteUrl(day.stops, day.travelMode)}" target="_blank" rel="noreferrer">오늘 경로</a>
    </div>
  `;
}

function renderNav() {
  const buttons = days
    .map(
      (day) =>
        `<button class="day-nav__button" data-day="${day.id}" type="button">${day.number}일</button>`
    )
    .join("");

  dayNav.insertAdjacentHTML("beforeend", buttons);
}

function renderItinerary() {
  dayList.innerHTML = days
    .map((day) => {
      const stops = day.stops
        .map(
          (stop, index) => `
            <button class="stop-card" type="button" data-day="${day.id}" data-stop="${index}">
              <span class="stop-time">${stop.time}</span>
              <span class="stop-body">
                <span class="stop-title-row">
                  <span class="stop-category">${stop.category}</span>
                  <strong class="stop-name">${stop.name}</strong>
                </span>
                <span class="stop-note">${stop.note}</span>
                <span class="tag-row">
                  ${stop.tags.map((tag) => `<span class="${tagClass(tag, stop)}">${tag}</span>`).join("")}
                </span>
              </span>
            </button>
          `
        )
        .join("");

      return `
        <article class="day-card" data-day-card="${day.id}">
          <header class="day-card__header">
            <span class="day-number">${day.number}</span>
            <div>
              <h3>${day.date} ${day.title}</h3>
              <p class="day-meta">${day.summary}</p>
            </div>
            <a class="route-link" href="${googleRouteUrl(day.stops, day.travelMode)}" target="_blank" rel="noreferrer">오늘 경로</a>
          </header>
          <div class="stop-list">${stops}</div>
        </article>
      `;
    })
    .join("");
}

function selectStop(dayId, stopIndex) {
  const day = days.find((item) => item.id === dayId);
  const stop = day?.stops[stopIndex];

  if (!day || !stop) return;

  document.querySelectorAll(".stop-card").forEach((card) => {
    const isActive = card.dataset.day === dayId && Number(card.dataset.stop) === stopIndex;
    card.classList.toggle("is-active", isActive);
  });

  mapTitle.textContent = stop.name;
  mapFrame.src = googleEmbedUrl(stop.query);
  mapOpenLink.href = googleSearchUrl(stop.query);
  mapDetails.innerHTML = mapDetailsMarkup(day, stop);

  return { day, stop };
}

function clearInlineMap(clearActive = false) {
  document.querySelector(".inline-map")?.remove();
  activeInlineMap = null;

  if (clearActive) {
    document.querySelectorAll(".stop-card").forEach((card) => {
      card.classList.remove("is-active");
    });
  }
}

function renderInlineMap(stopCard, day, stop, stopIndex) {
  clearInlineMap();

  const inlineMap = document.createElement("div");
  inlineMap.className = "inline-map";
  inlineMap.dataset.day = day.id;
  inlineMap.dataset.stop = String(stopIndex);
  inlineMap.innerHTML = `
    <div class="inline-map__toolbar">
      <div>
        <p class="eyebrow">Map</p>
        <h4>${stop.name}</h4>
      </div>
      <button class="inline-map__close" type="button">닫기</button>
    </div>
    <div class="inline-map__frame">
      <iframe
        title="${stop.name} Google Maps"
        src="${googleEmbedUrl(stop.query)}"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        allowfullscreen
      ></iframe>
    </div>
    <div class="inline-map__details">
      ${mapDetailsMarkup(day, stop)}
    </div>
  `;

  stopCard.insertAdjacentElement("afterend", inlineMap);
  activeInlineMap = { dayId: day.id, stopIndex };
}

function filterDay(dayId) {
  clearInlineMap();

  document.querySelectorAll(".day-nav__button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.day === dayId);
  });

  document.querySelectorAll(".day-card").forEach((card) => {
    card.classList.toggle("is-hidden", dayId !== "all" && card.dataset.dayCard !== dayId);
  });

  const targetDay = dayId === "all" ? days[0] : days.find((day) => day.id === dayId);
  if (targetDay) {
    selectStop(targetDay.id, 0);
  }
}

renderNav();
renderItinerary();
openHotelMap.href = googleSearchUrl(hotel.query);
selectStop(days[0].id, 0);

dayList.addEventListener("click", (event) => {
  const closeButton = event.target.closest(".inline-map__close");
  if (closeButton) {
    clearInlineMap(true);
    return;
  }

  const stopCard = event.target.closest(".stop-card");
  if (!stopCard) return;

  const stopIndex = Number(stopCard.dataset.stop);

  if (
    mobileInlineMap.matches &&
    activeInlineMap?.dayId === stopCard.dataset.day &&
    activeInlineMap?.stopIndex === stopIndex
  ) {
    clearInlineMap(true);
    return;
  }

  const selection = selectStop(stopCard.dataset.day, stopIndex);

  if (mobileInlineMap.matches && selection) {
    renderInlineMap(stopCard, selection.day, selection.stop, stopIndex);
  }
});

dayNav.addEventListener("click", (event) => {
  const button = event.target.closest(".day-nav__button");
  if (!button) return;

  filterDay(button.dataset.day);
});

mobileInlineMap.addEventListener("change", () => {
  clearInlineMap();
});
