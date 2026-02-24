let myChart = null;

function highlightOnMap(dataIndex) {
    if (!myChart) return;
    myChart.dispatchAction({ type: 'downplay', seriesIndex: 0 });
    myChart.dispatchAction({ type: 'highlight', seriesIndex: 0, dataIndex: dataIndex });
    myChart.dispatchAction({ type: 'showTip', seriesIndex: 0, dataIndex: dataIndex });
}

async function initMap() {
    try {
        const mapUrls = [
            'https://fastly.jsdelivr.net/npm/echarts@4.9.0/map/json/china.json',
            'https://cdn.jsdelivr.net/npm/echarts@4.9.0/map/json/china.json',
            'https://unpkg.com/echarts@4.9.0/map/json/china.json'
        ];
        
        let chinaJson = null;
        let lastError = null;
        
        for (const url of mapUrls) {
            try {
                const response = await fetch(url);
                if (response.ok) {
                    chinaJson = await response.json();
                    console.log('Map loaded from:', url);
                    break;
                }
            } catch (e) {
                lastError = e;
                console.log('Failed to load from', url, e.message);
            }
        }
        
        if (!chinaJson) {
            throw new Error('All map sources failed: ' + (lastError ? lastError.message : 'Unknown error'));
        }

        echarts.registerMap('china', chinaJson);
        
        const mapContainer = document.getElementById('china-map');
        if (!mapContainer) {
            throw new Error('Map container not found');
        }
        
        myChart = echarts.init(mapContainer);
        window.myChart = myChart;

        const isMobile = window.innerWidth <= 640;
        const initialZoom = isMobile ? 1.0 : CONFIG.zoom;
        const initialCenter = isMobile ? [105, 36] : CONFIG.center;

        const option = {
            backgroundColor: 'transparent',
            geo: {
                map: 'china',
                roam: true,
                zoom: initialZoom,
                center: initialCenter,
                label: { show: false },
                tooltip: { show: false },
                itemStyle: {
                    areaColor: 'rgba(30, 41, 59, 0.6)',
                    borderColor: 'rgba(148, 163, 184, 0.2)',
                    borderWidth: 1,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10
                },
                emphasis: {
                    itemStyle: {
                        areaColor: 'rgba(51, 65, 85, 0.8)'
                    },
                    label: {
                        show: true,
                        color: '#ffffff',
                        fontSize: 12,
                        fontWeight: 'bold',
                        textShadowColor: 'rgba(0,0,0,0.8)',
                        textShadowBlur: 4
                    }
                }
            },
            tooltip: {
                trigger: 'item',
                backgroundColor: 'rgba(15, 23, 42, 0.95)',
                borderColor: 'rgba(255, 255, 255, 0.2)',
                textStyle: { color: '#fff' },
                position: function (point, params, dom, rect, size) {
                    if (window.innerWidth <= 640) {
                        return [point[0], point[1] - size.contentSize[1] - 10];
                    }
                    return [point[0] + 10, point[1] - 10];
                },
                formatter: function (params) {
                    if (params.data) {
                        return `<div class="font-bold text-base mb-1">${params.data.name}</div>
                                <div class="text-xs text-slate-300 mb-1">${params.data.address}</div>
                                <div class="text-xs text-blue-300">大屏数量: ${params.data.screenCount} 块</div>
                                <div class="text-xs text-slate-400 mt-1">点击查看详情</div>`;
                    }
                    return '';
                }
            },
            series: [
                {
                    name: '商场位置',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: CONFIG.locations.map((item, index) => ({
                        name: item.name,
                        value: [...item.value, item.screenCount],
                        itemStyle: { color: '#ffffff', cursor: 'pointer' },
                        ...item,
                        index: index
                    })),
                    symbolSize: function (val) {
                        const count = val[2];
                        if (count >= 12) return isMobile ? 16 : 12;
                        if (count >= 8) return isMobile ? 14 : 10;
                        return isMobile ? 12 : 8;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke',
                        scale: 2,
                        period: 4
                    },
                    label: { show: false },
                    itemStyle: {
                        color: '#ffffff',
                        shadowBlur: 20,
                        shadowColor: '#ffffff',
                        cursor: 'pointer'
                    },
                    emphasis: {
                        scale: 1.5,
                        label: { show: false },
                        itemStyle: { shadowBlur: 30, shadowColor: '#ffffff' }
                    },
                    select: {
                        itemStyle: { color: '#60a5fa', shadowBlur: 30, shadowColor: '#60a5fa' }
                    },
                    selectedMode: 'single'
                }
            ]
        };

        myChart.setOption(option);

        setTimeout(() => {
            const loading = document.getElementById('loading');
            if (loading) {
                loading.style.opacity = '0';
                setTimeout(() => { loading.style.display = 'none'; }, 500);
            }
        }, 500);

        if (typeof generateLocationList === 'function') {
            generateLocationList();
        }
        if (typeof updateStats === 'function') {
            updateStats();
        }

        window.addEventListener('resize', () => {
            if (myChart) {
                myChart.resize();
                const isMobileNow = window.innerWidth <= 640;
                myChart.setOption({
                    geo: {
                        zoom: isMobileNow ? 1.0 : CONFIG.zoom,
                        center: isMobileNow ? [105, 36] : CONFIG.center
                    },
                    series: [{
                        symbolSize: function (val) {
                            const count = val[2];
                            if (count >= 12) return isMobileNow ? 16 : 12;
                            if (count >= 8) return isMobileNow ? 14 : 10;
                            return isMobileNow ? 12 : 8;
                        }
                    }]
                });
            }
        });

        myChart.on('click', function (params) {
            if (params.componentType === 'series' && params.data) {
                if (typeof showLocationInfo === 'function') {
                    showLocationInfo(params.data);
                }
                highlightOnMap(params.dataIndex);
            }
        });

        let lastClickTime = 0;
        myChart.getZr().on('click', function (params) {
            const currentTime = new Date().getTime();
            if (currentTime - lastClickTime < 300) {
                const pointInPixel = [params.offsetX, params.offsetY];
                if (myChart.containPixel('geo', pointInPixel)) {
                    const pointInGeo = myChart.convertFromPixel('geo', pointInPixel);
                    myChart.setOption({
                        geo: {
                            center: pointInGeo,
                            zoom: 3
                        }
                    });
                }
            }
            lastClickTime = currentTime;
        });

    } catch (error) {
        console.error('地图加载失败:', error);
        const loading = document.getElementById('loading');
        if (loading) {
            loading.innerHTML = '<div class="text-red-400 text-center p-4"><div class="mb-2">地图数据加载失败</div><div class="text-sm text-slate-400">' + error.message + '</div><button onclick="location.reload()" class="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">刷新重试</button></div>';
        }
    }
}

document.addEventListener('DOMContentLoaded', initMap);