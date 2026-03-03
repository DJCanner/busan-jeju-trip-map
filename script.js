/**
 * 2026 釜山濟州：櫻花購物放鬆之旅
 * 
 * 在下方填入您的 Mapbox Access Token
 * 您可以前往 https://www.mapbox.com/ 免費註冊並取得 Token
 */
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiZGpjYW5uZXIiLCJhIjoiY21tOHpyNDk0MDB3NDJxcTQ4Znd5azg0OCJ9.iy0qxpQTAqulKSqAlYqmsA';

const itineraryData = [
    {
        day: "3/21 (六)",
        title: "釜山抵達 ➜ 廣安里之夜",
        locations: [
            { time: "15:45", title: "金海機場", coords: [35.1743, 128.9363], desc: "抵達金海機場後搭乘機場巴士往海雲台。", naver: "https://map.naver.com/v5/search/김해국제공항", reels: "https://www.instagram.com/explore/tags/김해공항/" },
            { time: "17:30", title: "Marysol by Haeundae Beach", coords: [35.1587, 129.1599], desc: "飯店 Check-in。", naver: "https://map.naver.com/v5/search/메리쏠 바이 해운대", reels: "https://www.instagram.com/explore/tags/메리쏠해운대/" },
            { time: "18:30", title: "水邊最高豬肉湯飯", coords: [35.1575, 129.1620], desc: "海雲台店享用晚餐。", naver: "https://map.naver.com/v5/search/수변최고돼지국밥 해운대점", reels: "https://www.instagram.com/explore/tags/수변최고돼지국밥/" },
            { time: "20:00", title: "廣安里無人機秀", coords: [35.1525, 129.1190], desc: "觀賞無人機演出。", isCherry: false, naver: "https://map.naver.com/v5/search/광안리해수욕장 드론쇼", reels: "https://www.instagram.com/explore/tags/광안리드론쇼/" }
        ]
    },
    {
        day: "3/22 (日)",
        title: "櫻花與西面逛街行程",
        locations: [
            { time: "10:00", title: "EGG DROP 海雲台店", coords: [35.1610, 129.1590], desc: "早餐推薦。", naver: "https://map.naver.com/v5/search/에그드랍 해운대점", reels: "https://www.instagram.com/explore/tags/에그드랍해운대/" },
            { time: "11:30", title: "溫泉川市民公園", coords: [35.1956, 129.0945], desc: "賞櫻關鍵景點，散步拍櫻花與油菜花。", isCherry: true, naver: "https://map.naver.com/v5/search/온천천 시민공원", reels: "https://www.instagram.com/explore/tags/온천천벚꽃/" },
            { time: "14:30", title: "西面商圈", coords: [35.1577, 129.0590], desc: "逛街行程：Musinsa Standard, Olive Young, 樂天百貨。", naver: "https://map.naver.com/v5/search/서면역", reels: "https://www.instagram.com/explore/tags/서면쇼핑/" },
            { time: "18:30", title: "海雲台那家韓牛", coords: [35.1620, 129.1610], desc: "晚餐享用韓牛。", naver: "https://map.naver.com/v5/search/해운대나가가한우", reels: "https://www.instagram.com/explore/tags/해운대나가가한우/" }
        ]
    },
    {
        day: "3/23 (一)",
        title: "百貨放鬆 ➜ 櫻花隧道",
        locations: [
            { time: "09:30", title: "大海鮑魚粥", coords: [35.1630, 129.1834], desc: "在海雲台尾浦。", naver: "https://map.naver.com/v5/search/바다마루 전복죽", reels: "https://www.instagram.com/explore/tags/바다마루전복죽/" },
            { time: "11:30", title: "Spa Land", coords: [35.1699, 129.1288], desc: "新世界百貨泡湯放鬆 4 小時。", naver: "https://map.naver.com/v5/search/신세계 센텀시티 스파랜드", reels: "https://www.instagram.com/explore/tags/스파랜드/" },
            { time: "16:30", title: "南川洞 Samick Beach", coords: [35.1448, 129.1226], desc: "巨大的櫻花隧道。", isCherry: true, naver: "https://map.naver.com/v5/search/남천동 삼익비치 벚꽃길", reels: "https://www.instagram.com/explore/tags/남천동벚꽃/" },
            { time: "19:00", title: "名品海雲台蔘雞湯", coords: [35.1601, 129.1607], desc: "晚餐溫補。", naver: "https://map.naver.com/v5/search/해운대 소문난 삼계탕", reels: "https://www.instagram.com/explore/tags/해운代소문난삼계탕/" }
        ]
    },
    {
        day: "3/24 (二)",
        title: "飛往濟州 ➜ 西歸浦自駕",
        locations: [
            { time: "09:00", title: "workingholiday", coords: [35.1615, 129.1630], desc: "早餐 Brunch。", naver: "https://map.naver.com/v5/search/워킹홀리데이 해운대", reels: "https://www.instagram.com/explore/tags/워킹홀리데이해운대/" },
            { time: "12:10", title: "濟州機場", coords: [33.5121, 126.4925], desc: "抵達濟州後前往 SK 租車。", naver: "https://map.naver.com/v5/search/제주국제공항", reels: "https://www.instagram.com/explore/tags/제주공항/" },
            { time: "13:30", title: "London Bagel Museum", coords: [33.5570, 126.6620], desc: "提早用 Catch Table 點外帶。", naver: "https://map.naver.com/v5/search/런던베이글뮤지엄 제주", reels: "https://www.instagram.com/explore/tags/런던베이글뮤지엄제주/" },
            { time: "14:30", title: "咸德海灘", coords: [33.5432, 126.6690], desc: "海邊野餐吃貝果。", naver: "https://map.naver.com/v5/search/함덕해수욕장", reels: "https://www.instagram.com/explore/tags/함덕해수욕장/" },
            { time: "18:00", title: "西歸浦每日偶來市場", coords: [33.2486, 126.5631], desc: "市場小吃晚餐。", naver: "https://map.naver.com/v5/search/서귀포 매일올레시장", reels: "https://www.instagram.com/explore/tags/서귀포매일올레시장/" }
        ]
    },
    {
        day: "3/25 (三)",
        title: "西歸浦：花路與城山海景",
        locations: [
            { time: "10:00", title: "Seogwipean Bakery", coords: [33.4530, 126.9200], desc: "買麵包咖啡。", naver: "https://map.naver.com/v5/search/서귀피안 베이커리", reels: "https://www.instagram.com/explore/tags/서귀피안베이커리/" },
            { time: "11:00", title: "城山日出峰", coords: [33.4586, 126.9424], desc: "看海與海女表演。", naver: "https://map.naver.com/v5/search/성산일출봉", reels: "https://www.instagram.com/explore/tags/성산일출봉/" },
            { time: "14:00", title: "鹿山路", coords: [33.3910, 126.7200], desc: "櫻花與油菜花大道，絕美公路。", isCherry: true, naver: "https://map.naver.com/v5/search/녹산로 유채꽃도로", reels: "https://www.instagram.com/explore/tags/녹산路벚꽃/" },
            { time: "18:30", title: "熟成到黑豬肉", coords: [33.2480, 126.4100], desc: "經典黑豬肉晚餐。", naver: "https://map.naver.com/v5/search/숙성도 서귀포", reels: "https://www.instagram.com/explore/tags/숙성도/" }
        ]
    },
    {
        day: "3/26 (四)",
        title: "市區櫻花 ➜ 賦歸",
        locations: [
            { time: "10:30", title: "三姓穴", coords: [33.5047, 126.5292], desc: "櫻花古蹟。", isCherry: true, naver: "https://map.naver.com/v5/search/삼성혈", reels: "https://www.instagram.com/explore/tags/삼성혈벚꽃/" },
            { time: "13:00", title: "典農路", coords: [33.5065, 126.5180], desc: "櫻花街漫步。", isCherry: true, naver: "https://map.naver.com/v5/search/전농로 벚꽃길", reels: "https://www.instagram.com/explore/tags/전농로벚꽃/" },
            { time: "17:30", title: "Hagwi Bobae Ssaem", coords: [33.4830, 126.4150], desc: "最後大餐：醬蟹排隊名店。", naver: "https://map.naver.com/v5/search/보배쌤 보리김치와게장 하귀점", reels: "https://www.instagram.com/explore/tags/보배쌤보리김치와게장/" },
            { time: "19:30", title: "SK 還車 ➜ 22:15 起飛", coords: [33.5080, 126.4880], desc: "回台北。", naver: "https://map.naver.com/v5/search/제주국제공항", reels: "https://www.instagram.com/explore/tags/제주공항/" }
        ]
    }
];

let map;
let markers = [];

function initMap() {
    if (MAPBOX_ACCESS_TOKEN === 'YOUR_MAPBOX_ACCESS_TOKEN_HERE') {
        alert("請在 script.js 第 7 行填入您的 Mapbox Access Token！");
        return;
    }

    mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [itineraryData[0].locations[0].coords[1], itineraryData[0].locations[0].coords[0]],
        zoom: 12
    });

    map.on('load', () => {
        // 設定繁體中文標籤
        const layers = map.getStyle().layers;
        layers.forEach(layer => {
            if (layer.layout && layer.layout['text-field']) {
                map.setLayoutProperty(layer.id, 'text-field', [
                    'coalesce',
                    ['get', 'name_zh-Hant'],
                    ['get', 'name_zh'],
                    ['get', 'name']
                ]);
            }
        });

        renderDay(0);
    });
}

function renderDay(dayIndex) {
    markers.forEach(m => m.remove());
    markers = [];

    if (map.getLayer('route')) map.removeLayer('route');
    if (map.getSource('route')) map.removeSource('route');

    const dayData = itineraryData[dayIndex];
    const path = dayData.locations.map(loc => [loc.coords[1], loc.coords[0]]);

    map.addSource('route', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'LineString',
                'coordinates': path
            }
        }
    });

    map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': dayIndex < 3 ? '#007BFF' : '#28A745',
            'line-width': 4,
            'line-opacity': 0.6,
            'line-dasharray': [2, 2]
        }
    });

    dayData.locations.forEach((loc, idx) => {
        const isCherry = loc.isCherry;
        const color = dayIndex < 3 ? '#007BFF' : '#28A745';
        const emoji = isCherry ? '🌸' : (idx === 0 ? '🚩' : '📍');

        const el = document.createElement('div');
        el.className = 'custom-div-icon';
        el.innerHTML = `
            <div class="marker-pin" style="background: ${isCherry ? '#FFB7C5' : color}"></div>
            <span class="marker-emoji" style="position: absolute; top:0; left:50%; transform: translateX(-50%);">${emoji}</span>
        `;

        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
            <div class="popup-content">
                <strong>${loc.time} | ${loc.title}</strong>
                <p>${loc.desc}</p>
                <div class="popup-actions" style="display:flex; gap:8px;">
                    <a href="${loc.naver}" target="_blank" class="action-btn naver-btn" style="background:#03C75A; color:white; padding:5px 10px; border-radius:4px; text-decoration:none; font-size:12px;">Naver Map</a>
                    <a href="${loc.reels}" target="_blank" class="action-btn reels-btn" style="background:linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); color:white; padding:5px 10px; border-radius:4px; text-decoration:none; font-size:12px;">Top Reels</a>
                </div>
            </div>
        `);

        const marker = new mapboxgl.Marker(el)
            .setLngLat([loc.coords[1], loc.coords[0]])
            .setPopup(popup)
            .addTo(map);

        markers.push(marker);
    });

    const bounds = new mapboxgl.LngLatBounds();
    path.forEach(p => bounds.extend(p));
    map.fitBounds(bounds, { padding: 50 });

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
            map.flyTo({
                center: [loc.coords[1], loc.coords[0]],
                zoom: 16,
                essential: true
            });
            markers[idx].togglePopup();
        };
        itineraryList.appendChild(item);
    });
}

document.querySelectorAll('.day-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        const day = parseInt(e.target.getAttribute('data-day'));
        renderDay(day);
    });
});

window.onload = initMap;
