let isSidebarCollapsed = false;

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const btnContainer = document.getElementById('toggle-btn-container');
    const bottomBar = document.getElementById('bottom-bar');

    isSidebarCollapsed = !isSidebarCollapsed;
    updateSidebarState();
}

function updateSidebarState() {
    const sidebar = document.getElementById('sidebar');
    const btnContainer = document.getElementById('toggle-btn-container');
    const bottomBar = document.getElementById('bottom-bar');

    if (!sidebar || !btnContainer || !bottomBar) return;

    const isMobile = window.innerWidth <= 1024;
    // 根据屏幕尺寸调整高度
    const sidebarHeight = window.innerWidth <= 640 ? '70vh' : '65vh';

    if (isSidebarCollapsed) {
        sidebar.classList.add('sidebar-collapsed');
        btnContainer.classList.add('collapsed');
        bottomBar.classList.add('sidebar-collapsed');

        if (isMobile) {
            bottomBar.style.bottom = '1rem';
            btnContainer.style.bottom = '1rem';
        } else {
            bottomBar.style.right = '24px';
        }
    } else {
        sidebar.classList.remove('sidebar-collapsed');
        btnContainer.classList.remove('collapsed');
        bottomBar.classList.remove('sidebar-collapsed');

        if (isMobile) {
            bottomBar.style.bottom = `calc(${sidebarHeight} + 1rem)`;
            btnContainer.style.bottom = `calc(${sidebarHeight} + 1rem)`;
        } else {
            bottomBar.style.right = 'calc(320px + 48px)';
        }
    }
}

function generateLocationList() {
    const listContainer = document.getElementById('location-list');
    if (!listContainer) {
        console.error('location-list element not found');
        return;
    }

    listContainer.innerHTML = '';

    if (!CONFIG.locations || CONFIG.locations.length === 0) {
        console.error('No locations data');
        return;
    }

    CONFIG.locations.forEach((loc, index) => {
        const item = document.createElement('div');
        item.style.cssText = 'flex-shrink: 0; margin-bottom: 0.4rem;';
        item.className = 'group flex items-center gap-3 rounded-lg hover:bg-slate-800/50 transition-all cursor-pointer border border-transparent hover:border-slate-700';
        // 移动端更紧凑的内边距
        if (window.innerWidth <= 640) {
            item.style.padding = '0.5rem 0.75rem';
        } else {
            item.style.padding = '0.6rem 0.75rem';
        }

        item.innerHTML = `
            <div class="relative flex-shrink-0" style="width: 12px; height: 12px;">
                <div class="w-3 h-3 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
                <div class="absolute inset-0 w-3 h-3 bg-white rounded-full animate-ping opacity-75"></div>
            </div>
            <div class="flex-1 min-w-0" style="min-width: 0;">
                <div class="flex justify-between items-center mb-0.5">
                    <span class="font-medium text-white group-hover:text-blue-300 transition-colors truncate" style="font-size: 0.9rem;">${loc.name}</span>
                    <span class="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 flex-shrink-0" style="margin-left: 0.5rem;">${loc.screenCount}屏</span>
                </div>
                <div class="text-xs text-slate-400 truncate" style="font-size: 0.75rem; line-height: 1.2;">${loc.address}</div>
                <div class="text-xs text-slate-500 mt-0.5" style="font-size: 0.65rem;">${loc.playTime} · ${loc.frequency}</div>
            </div>
        `;

        item.addEventListener('click', () => {
            showLocationInfo({ ...loc, value: loc.value });
            highlightOnMap(index);
            if (window.myChart) {
                window.myChart.setOption({ geo: { center: loc.value, zoom: 2 } });
            }

            if (window.innerWidth <= 1024 && !isSidebarCollapsed) {
                toggleSidebar();
            }
        });

        listContainer.appendChild(item);
    });

    console.log(`Generated ${CONFIG.locations.length} location items`);
}

function updateStats() {
    const totalScreens = CONFIG.locations.reduce((sum, loc) => sum + loc.screenCount, 0);
    const cities = new Set(CONFIG.locations.map(loc => loc.address.substring(0, 2))).size;
    const mallCount = CONFIG.locations.length;

    const mallCountEl = document.getElementById('stat-mall-count');
    const cityCountEl = document.getElementById('stat-city-count');
    const screenCountEl = document.getElementById('stat-screen-count');
    const listCountEl = document.getElementById('list-count');
    const updateTimeEl = document.getElementById('sidebar-update-time');

    if (mallCountEl) mallCountEl.textContent = mallCount;
    if (cityCountEl) cityCountEl.textContent = cities;
    if (screenCountEl) screenCountEl.textContent = totalScreens;
    if (listCountEl) listCountEl.textContent = mallCount + ' 个';

    const now = new Date();
    if (updateTimeEl) updateTimeEl.textContent = now.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
}

function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;

    isSidebarCollapsed = false;
    updateSidebarState();
}

window.addEventListener('resize', () => {
    updateSidebarState();
});

let touchStartY = 0;
let touchEndY = 0;
let isScrolling = false;  // 新增：标记是否正在滚动

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const locationList = document.getElementById('location-list');

    initSidebar();

    if (sidebar) {
        sidebar.addEventListener('touchstart', (e) => {
            touchStartY = e.changedTouches[0].screenY;
            isScrolling = false;  // 重置滚动标记
        }, { passive: true });

        sidebar.addEventListener('touchmove', (e) => {
            isScrolling = true;  // 标记正在滚动
        }, { passive: true });

        sidebar.addEventListener('touchend', (e) => {
            touchEndY = e.changedTouches[0].screenY;
            // 只有在非滚动状态下才处理滑动关闭
            if (!isScrolling) {
                handleSwipe();
            }
            isScrolling = false;
        }, { passive: true });
    }

    // 为列表添加滚动事件监听，阻止事件冒泡到 sidebar
    if (locationList) {
        locationList.addEventListener('scroll', (e) => {
            e.stopPropagation();
        }, { passive: true });

        locationList.addEventListener('touchmove', (e) => {
            e.stopPropagation();  // 阻止滚动事件冒泡到 sidebar
        }, { passive: true });
    }
});

function handleSwipe() {
    if (window.innerWidth > 1024) return;

    const swipeThreshold = 50;
    const diff = touchEndY - touchStartY;

    // 只有向下滑动超过阈值且侧边栏展开时才关闭
    if (diff > swipeThreshold && !isSidebarCollapsed) {
        toggleSidebar();
    }
}