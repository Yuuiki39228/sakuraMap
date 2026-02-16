let myChart = null;

function highlightOnMap(dataIndex) {
    if (!myChart) return;
    myChart.dispatchAction({ type: 'downplay', seriesIndex: 0 });
    myChart.dispatchAction({ type: 'highlight', seriesIndex: 0, dataIndex: dataIndex });
    myChart.dispatchAction({ type: 'showTip', seriesIndex: 0, dataIndex: dataIndex });
}

async function initMap() {
    try {
        const response = await fetch('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json');
        const chinaJson = await response.json();

        echarts.registerMap('china', chinaJson);
        myChart = echarts.init(document.getElementById('china-map'));
        window.myChart = myChart;

        const option = {
            backgroundColor: 'transparent',
            geo: {
                map: 'china',
                roam: true,
                zoom: CONFIG.zoom,
                center: CONFIG.center,
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
                        color: '#ffffff',      // 改为白色
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
                        if (count >= 12) return 12;
                        if (count >= 8) return 10;
                        return 8;
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
            document.getElementById('loading').style.opacity = '0';
            setTimeout(() => { document.getElementById('loading').style.display = 'none'; }, 500);
        }, 1000);

        generateLocationList();
        updateStats();

        window.addEventListener('resize', () => myChart.resize());

        myChart.on('click', function (params) {
            if (params.componentType === 'series' && params.data) {
                showLocationInfo(params.data);
                highlightOnMap(params.dataIndex);
            }
        });

    } catch (error) {
        console.error('地图加载失败:', error);
        document.getElementById('loading').innerHTML = '<div class="text-red-400">地图数据加载失败，请刷新重试</div>';
    }
}

document.addEventListener('DOMContentLoaded', initMap);