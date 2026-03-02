const itineraryData = [
    {
        day: "3/21 (六)",
        title: "釜山抵達 ➜ 廣安里之夜",
        locations: [
            { time: "15:45", title: "金海機場", coords: [35.1743, 128.9363], desc: "抵達金海機場後搭乘機場巴士往海雲台。", naver: "https://map.naver.com/v5/entry/place/11591522", reels: "https://www.instagram.com/explore/tags/김해공항/" },
            { time: "17:30", title: "Marysol by Haeundae Beach", coords: [35.1587, 129.1599], desc: "飯店 Check-in。", naver: "https://map.naver.com/v5/entry/place/1445778897", reels: "https://www.instagram.com/explore/tags/메리쏠해운대/" },
            { time: "18:30", title: "水邊最高豬肉湯飯", coords: [35.1575, 129.1620], desc: "海雲台店享用晚餐。", naver: "https://map.naver.com/v5/entry/place/1944889500", reels: "https://www.instagram.com/explore/tags/수변최고돼지국밥/" },
            { time: "20:00", title: "廣安里無人機秀", coords: [35.1525, 129.1190], desc: "觀賞無人機演出。", isCherry: false, naver: "https://map.naver.com/v5/entry/place/11091560", reels: "https://www.instagram.com/explore/tags/광안리드론쇼/" }
        ]
    },
    {
        day: "3/22 (日)",
        title: "櫻花與西面逛街行程",
        locations: [
            { time: "10:00", title: "EGG DROP 海雲台店", coords: [35.1610, 129.1590], desc: "早餐推薦。", naver: "https://map.naver.com/v5/entry/place/1388044738", reels: "https://www.instagram.com/explore/tags/에그드랍해운대/" },
            { time: "11:30", title: "溫泉川市民公園", coords: [35.1956, 129.0945], desc: "賞櫻關鍵景點，散步拍櫻花與油菜花。", isCherry: true, naver: "https://map.naver.com/v5/entry/place/13491417", reels: "https://www.instagram.com/explore/tags/온천천벚꽃/" },
            { time: "14:30", title: "西面商圈", coords: [35.1577, 129.0590], desc: "逛街行程：Musinsa Standard, Olive Young, 樂天百貨。", naver: "https://map.naver.com/v5/entry/place/13479633", reels: "https://www.instagram.com/explore/tags/서면쇼핑/" },
            { time: "18:30", title: "海雲台那家韓牛", coords: [35.1620, 129.1610], desc: "晚餐享用韓牛。", naver: "https://map.naver.com/v5/entry/place/1151605335", reels: "https://www.instagram.com/explore/tags/해운대나가가한우/" }
        ]
    },
    {
        day: "3/23 (一)",
        title: "百貨放鬆 ➜ 櫻花隧道",
        locations: [
            { time: "09:30", title: "大海鮑魚粥", coords: [35.1630, 129.1834], desc: "在海雲台尾浦。", naver: "https://map.naver.com/v5/entry/place/33824491", reels: "https://www.instagram.com/explore/tags/바다마루전복죽/" },
            { time: "11:30", title: "Spa Land", coords: [35.1699, 129.1288], desc: "新世界百貨泡湯放鬆 4 小時。", naver: "https://map.naver.com/v5/entry/place/12888698", reels: "https://www.instagram.com/explore/tags/스파랜드/" },
            { time: "16:30", title: "南川洞 Samick Beach", coords: [35.1448, 129.1226], desc: "巨大的櫻花隧道。", isCherry: true, naver: "https://map.naver.com/v5/entry/place/11624634", reels: "https://www.instagram.com/explore/tags/남천동벚꽃/" },
            { time: "19:00", title: "名品海雲台蔘雞湯", coords: [35.1601, 129.1607], desc: "晚餐溫補。", naver: "https://map.naver.com/v5/entry/place/12030013", reels: "https://www.instagram.com/explore/tags/해운대소문난삼계탕/" }
        ]
    },
    {
        day: "3/24 (二)",
        title: "飛往濟州 ➜ 西歸浦自駕",
        locations: [
            { time: "09:00", title: "workingholiday", coords: [35.1615, 129.1630], desc: "早餐 Brunch。", naver: "https://map.naver.com/v5/entry/place/1126759711", reels: "https://www.instagram.com/explore/tags/워킹홀리데이해운대/" },
            { time: "12:10", title: "濟州機場", coords: [33.5121, 126.4925], desc: "抵達濟州後前往 SK 租車。", naver: "https://map.naver.com/v5/entry/place/11591524", reels: "https://www.instagram.com/explore/tags/제주공항/" },
            { time: "13:30", title: "London Bagel Museum", coords: [33.5570, 126.6620], desc: "提早用 Catch Table 點外帶。", naver: "https://map.naver.com/v5/entry/place/1758454236", reels: "https://www.instagram.com/explore/tags/런던베이글뮤지엄제주/" },
            { time: "14:30", title: "咸德海灘", coords: [33.5432, 126.6690], desc: "海邊野餐吃貝果。", naver: "https://map.naver.com/v5/entry/place/11491223", reels: "https://www.instagram.com/explore/tags/함덕해수욕장/" },
            { time: "18:00", title: "西歸浦每日偶來市場", coords: [33.2486, 126.5631], desc: "市場小吃晚餐。", naver: "https://map.naver.com/v5/entry/place/11568284", reels: "https://www.instagram.com/explore/tags/서귀포매일올레시장/" }
        ]
    },
    {
        day: "3/25 (三)",
        title: "西歸浦：花路與城山海景",
        locations: [
            { time: "10:00", title: "Seogwipean Bakery", coords: [33.4530, 126.9200], desc: "買麵包咖啡。", naver: "https://map.naver.com/v5/entry/place/1795151167", reels: "https://www.instagram.com/explore/tags/서귀피안베이커리/" },
            { time: "11:00", title: "城山日出峰", coords: [33.4586, 126.9424], desc: "看海與海女表演。", naver: "https://map.naver.com/v5/entry/place/11491196", reels: "https://www.instagram.com/explore/tags/성산일출봉/" },
            { time: "14:00", title: "鹿山路", coords: [33.3910, 126.7200], desc: "櫻花與油菜花大道，絕美公路。", isCherry: true, naver: "https://map.naver.com/v5/entry/place/1640995540", reels: "https://www.instagram.com/explore/tags/녹산로벚꽃/" },
            { time: "18:30", title: "熟成到黑豬肉", coords: [33.2480, 126.4100], desc: "經典黑豬肉晚餐。", naver: "https://map.naver.com/v5/entry/place/1501602446", reels: "https://www.instagram.com/explore/tags/숙성도/" }
        ]
    },
    {
        day: "3/26 (四)",
        title: "市區櫻花 ➜ 賦歸",
        locations: [
            { time: "10:30", title: "三姓穴", coords: [33.5047, 126.5292], desc: "櫻花古蹟。", isCherry: true, naver: "https://map.naver.com/v5/entry/place/11491322", reels: "https://www.instagram.com/explore/tags/삼성혈벚꽃/" },
            { time: "13:00", title: "典農路", coords: [33.5065, 126.5180], desc: "櫻花街漫步。", isCherry: true, naver: "https://map.naver.com/v5/entry/place/1223402772", reels: "https://www.instagram.com/explore/tags/전농로벚꽃/" },
            { time: "17:30", title: "Hagwi Bobae Ssaem", coords: [33.4830, 126.4150], desc: "最後大餐：醬蟹排隊名店。", naver: "https://map.naver.com/v5/entry/place/1739265893", reels: "https://www.instagram.com/explore/tags/보배쌤보리김치와게장/" },
            { time: "19:30", title: "SK 還車 ➜ 22:15 起飛", coords: [33.5080, 126.4880], desc: "回台北。", naver: "https://map.naver.com/v5/entry/place/11591524", reels: "https://www.instagram.com/explore/tags/제주공항/" }
        ]
    }
];

let map;
let markerLayerGroup;
let polyline;
let currentDay = 0;

function initMap() {
    map = L.map('map', {
        zoomControl: false
    }).setView(itineraryData[0].locations[0].coords, 13);

    L.control.zoom({ position: 'bottomright' }).addTo(map);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);

    markerLayerGroup = L.layerGroup().addTo(map);

    renderDay(0);
}

function renderDay(dayIndex) {
    markerLayerGroup.clearLayers();
    if (polyline) map.removeLayer(polyline);

    const dayData = itineraryData[dayIndex];
    const coords = dayData.locations.map(loc => loc.coords);

    // Draw markers
    dayData.locations.forEach((loc, idx) => {
        const isCherry = loc.isCherry;
        const color = dayIndex < 3 ? '#007BFF' : '#28A745'; // Busan Blue vs Jeju Green
        const emoji = isCherry ? '🌸' : (idx === 0 ? '🚩' : '📍');

        const customIcon = L.divIcon({
            className: 'custom-div-icon',
            html: `<div class="marker-pin" style="background: ${isCherry ? '#FFB7C5' : color}"></div><span class="marker-emoji">${emoji}</span>`,
            iconSize: [30, 42],
            iconAnchor: [15, 42]
        });

        const marker = L.marker(loc.coords, { icon: customIcon })
            .bindPopup(`
                <div class="popup-content">
                    <strong>${loc.time} | ${loc.title}</strong>
                    <p>${loc.desc}</p>
                    <div class="popup-actions">
                        <a href="${loc.naver}" target="_blank" class="action-btn naver-btn">Naver Map</a>
                        <a href="${loc.reels}" target="_blank" class="action-btn reels-btn">Top Reels</a>
                    </div>
                </div>
            `);

        markerLayerGroup.addLayer(marker);
    });

    // Draw route lines
    polyline = L.polyline(coords, {
        color: dayIndex < 3 ? '#007BFF' : '#28A745',
        weight: 3,
        opacity: 0.6,
        dashArray: '10, 10'
    }).addTo(map);

    // Update Sidebar
    const itineraryList = document.getElementById('itinerary-content');
    itineraryList.innerHTML = `<h3>${dayData.day} - ${dayData.title}</h3>`;

    dayData.locations.forEach((loc, idx) => {
        const item = document.createElement('div');
        item.className = `itinerary-item ${loc.isCherry ? 'cherry-blossom' : ''}`;
        item.innerHTML = `
            <div class="time">${loc.time}</div>
            <div class="title">${loc.title}</div>
            <div class="desc">${loc.desc}</div>
        `;
        item.onclick = () => {
            map.flyTo(loc.coords, 16);
            markerLayerGroup.eachLayer(layer => {
                if (layer.getLatLng().lat === loc.coords[0] && layer.getLatLng().lng === loc.coords[1]) {
                    layer.openPopup();
                }
            });
        };
        itineraryList.appendChild(item);
    });

    // Fit map to markers
    map.flyToBounds(polyline.getBounds(), { padding: [50, 50] });
}

// Event Listeners
document.querySelectorAll('.day-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        const day = parseInt(e.target.getAttribute('data-day'));
        currentDay = day;
        renderDay(day);
    });
});

window.onload = initMap;
