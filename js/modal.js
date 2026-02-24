// 弹窗功能
let currentSelected = null;
let isModalOpen = false;

function showLocationInfo(data) {
    // 防止重复打开
    if (isModalOpen) return;
    
    const modal = document.getElementById('info-modal');
    const overlay = document.getElementById('modal-overlay');
    
    if (!modal || !overlay) {
        console.error('Modal elements not found');
        return;
    }

    // 设置标志位
    isModalOpen = true;

    const nameEl = document.getElementById('modal-mall-name');
    const addressEl = document.getElementById('modal-address');
    const countEl = document.getElementById('modal-screen-count');
    const timeEl = document.getElementById('modal-play-time');
    const freqEl = document.getElementById('modal-frequency');

    if (nameEl) nameEl.textContent = data.name || '商场名称';
    if (addressEl) addressEl.textContent = data.address || '地址';
    if (countEl) countEl.textContent = data.screenCount || '0';
    if (timeEl) timeEl.textContent = data.playTime || '00:00 - 00:00';
    if (freqEl) freqEl.textContent = data.frequency || '0 分钟/次';

    const screenContainer = document.getElementById('modal-screen-locations');
    if (screenContainer) {
        screenContainer.innerHTML = '';

        const locations = data.screenLocations || [];
        locations.forEach((location, idx) => {
            if (location === 'NULL') return;
            
            const div = document.createElement('div');
            div.className = 'flex items-center justify-between bg-slate-800/30 rounded-lg p-2.5 border border-slate-700/50';
            div.innerHTML = `
                <div class="flex items-center gap-2">
                    <span class="w-5 h-5 rounded bg-blue-500/20 text-blue-300 text-xs flex items-center justify-center border border-blue-500/30 flex-shrink-0">${idx + 1}</span>
                    <span class="text-sm text-slate-300">${location}</span>
                </div>
                <div class="flex items-center gap-1 flex-shrink-0">
                    <span class="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                    <span class="text-xs text-slate-500">正常</span>
                </div>
            `;
            screenContainer.appendChild(div);
        });
    }

    // 显示弹窗
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    
    // 移动端添加滑入动画
    if (window.innerWidth <= 640) {
        modal.style.animation = 'modalSlideUp 0.3s ease-out';
    }
    
    currentSelected = data;
    
    console.log('Modal opened for:', data.name);
}

function closeModal() {
    if (!isModalOpen) return;
    
    const modal = document.getElementById('info-modal');
    const overlay = document.getElementById('modal-overlay');
    
    if (!modal || !overlay) return;
    
    // 移动端添加滑出动画
    if (window.innerWidth <= 640) {
        modal.style.animation = 'modalSlideDown 0.2s ease-in';
        setTimeout(() => {
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
            modal.style.animation = '';
            isModalOpen = false;
        }, 200);
    } else {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
        isModalOpen = false;
    }
    
    if (window.myChart) {
        window.myChart.dispatchAction({ type: 'downplay', seriesIndex: 0 });
    }
    currentSelected = null;
    
    console.log('Modal closed');
}

// ESC键关闭
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && isModalOpen) {
        closeModal();
    }
});

// 初始化事件监听
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('modal-overlay');
    const modal = document.getElementById('info-modal');
    
    if (overlay) {
        // 使用 mousedown 而不是 click，避免冒泡
        overlay.addEventListener('mousedown', (e) => {
            e.preventDefault();
            e.stopPropagation();
            closeModal();
        });
        
        // 移动端触摸事件
        overlay.addEventListener('touchstart', (e) => {
            e.preventDefault();
            e.stopPropagation();
            closeModal();
        }, { passive: false });
    }
    
    if (modal) {
        // 阻止弹窗内部点击冒泡
        modal.addEventListener('mousedown', (e) => {
            e.stopPropagation();
        });
        
        modal.addEventListener('touchstart', (e) => {
            e.stopPropagation();
        }, { passive: true });
        
        // 阻止弹窗内部滚轮冒泡
        modal.addEventListener('wheel', (e) => {
            e.stopPropagation();
        }, { passive: true });
        
        modal.addEventListener('scroll', (e) => {
            e.stopPropagation();
        }, { passive: true });
    }
});

// 防止双击缩放触发关闭
let lastTouchTime = 0;
document.addEventListener('touchend', (e) => {
    const currentTime = new Date().getTime();
    if (currentTime - lastTouchTime < 300) {
        // 双击，检查是否在弹窗内部
        const modal = document.getElementById('info-modal');
        if (modal && !modal.classList.contains('hidden')) {
            const isInsideModal = modal.contains(e.target);
            if (!isInsideModal) {
                e.preventDefault();
            }
        }
    }
    lastTouchTime = currentTime;
}, { passive: false });