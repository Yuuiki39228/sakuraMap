let isSidebarCollapsed = false; // 默认展开

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

    if (isSidebarCollapsed) {
        sidebar.classList.add('sidebar-collapsed');
        btnContainer.classList.add('collapsed');
        
        if (isMobile) {
            bottomBar.style.bottom = '1rem';
            bottomBar.classList.add('sidebar-collapsed');
        } else {
            bottomBar.style.right = '24px';
        }
    } else {
        sidebar.classList.remove('sidebar-collapsed');
        btnContainer.classList.remove('collapsed');
        
        if (isMobile) {
            bottomBar.style.bottom = 'calc(45vh + 1rem)';
            bottomBar.classList.remove('sidebar-collapsed');
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

    CONFIG.locations.forEach((loc, index) => {
        const item = document.createElement('div');
        item.className = 'group flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800/50 transition-all cursor-pointer border border-transparent hover:border-slate-700';
        item.innerHTML = `
            <div class="relative flex-shrink-0">
                <div class="w-3 h-3 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
                <div class="absolute inset-0 w-3 h-3 bg-white rounded-full animate-ping opacity-75"></div>
            </div>
            <div class="flex-1 min-w-0">
                <div class="flex justify-between items-center mb-1">
                    <span class="font-medium text-white group-hover:text-blue-300 transition-colors truncate">${loc.name}</span>
                    <span class="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 flex-shrink-0">${loc.screenCount}屏</span>
                </div>
                <div class="text-xs text-slate-400 truncate">${loc.address}</div>
                <div class="text-[10px] text-slate-500 mt-1">${loc.playTime} · ${loc.frequency}</div>
            </div>
        `;

        item.addEventListener('click', () => {
            showLocationInfo({ ...loc, value: loc.value });
            highlightOnMap(index);
            if (window.myChart) {
                window.myChart.setOption({ geo: { center: loc.value, zoom: 2 } });
            }
            
            // 移动端点击后自动收起侧边栏
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

// 初始化侧边栏状态
function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;
    
    // 默认展开
    isSidebarCollapsed = false;
    updateSidebarState();
}

window.addEventListener('resize', () => {
    updateSidebarState();
});

// 触摸滑动支持
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    
    // 初始化
    initSidebar();
    
    if (sidebar) {
        sidebar.addEventListener('touchstart', (e) => {
            touchStartY = e.changedTouches[0].screenY;
        }, { passive: true });

        sidebar.addEventListener('touchend', (e) => {
            touchEndY = e.changedTouches[0].screenY;
            handleSwipe();
        }, { passive: true });
    }
});

function handleSwipe() {
    if (window.innerWidth > 1024) return;
    
    const swipeThreshold = 50;
    const diff = touchEndY - touchStartY;
    
    // 向下滑动收起
    if (diff > swipeThreshold && !isSidebarCollapsed) {
        toggleSidebar();
    }
}