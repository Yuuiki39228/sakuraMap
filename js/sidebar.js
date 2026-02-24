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

    if (isSidebarCollapsed) {
        sidebar.classList.add('sidebar-collapsed');
        btnContainer.classList.add('collapsed');
        bottomBar.classList.add('sidebar-collapsed');
        
        if (isMobile) {
            bottomBar.style.bottom = '1rem';
        } else {
            bottomBar.style.right = '24px';
        }
    } else {
        sidebar.classList.remove('sidebar-collapsed');
        btnContainer.classList.remove('collapsed');
        bottomBar.classList.remove('sidebar-collapsed');
        
        if (isMobile) {
            bottomBar.style.bottom = 'calc(45vh + 1rem)';
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
    
    // 清空并重新生成
    listContainer.innerHTML = '';

    if (!CONFIG.locations || CONFIG.locations.length === 0) {
        console.error('No locations data');
        return;
    }

    CONFIG.locations.forEach((loc, index) => {
        const item = document.createElement('div');
        // 确保每个项目都有明确的高度
        item.style.cssText = 'flex-shrink: 0; margin-bottom: 0.5rem;';
        item.className = 'group flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800/50 transition-all cursor-pointer border border-transparent hover:border-slate-700';
        
        const screenLocations = loc.screenLocations ? loc.screenLocations.join(', ') : '';
        
        item.innerHTML = `
            <div class="relative flex-shrink-0" style="width: 12px; height: 12px;">
                <div class="w-3 h-3 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
                <div class="absolute inset-0 w-3 h-3 bg-white rounded-full animate-ping opacity-75"></div>
            </div>
            <div class="flex-1 min-w-0" style="min-width: 0;">
                <div class="flex justify-between items-center mb-1">
                    <span class="font-medium text-white group-hover:text-blue-300 transition-colors truncate" style="font-size: 0.9rem;">${loc.name}</span>
                    <span class="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 flex-shrink-0" style="margin-left: 0.5rem;">${loc.screenCount}屏</span>
                </div>
                <div class="text-xs text-slate-400 truncate" style="font-size: 0.75rem;">${loc.address}</div>
                <div class="text-xs text-slate-500 mt-1" style="font-size: 0.65rem;">${loc.playTime} · ${loc.frequency}</div>
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
    
    // 强制刷新列表容器高度
    setTimeout(() => {
        listContainer.style.display = 'none';
        listContainer.offsetHeight; // 触发重绘
        listContainer.style.display = '';
    }, 100);
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

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    
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
    
    if (diff > swipeThreshold && !isSidebarCollapsed) {
        toggleSidebar();
    }
}