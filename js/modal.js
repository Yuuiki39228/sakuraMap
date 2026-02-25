// 弹窗功能
let currentSelected = null;
let isModalOpen = false;
let overlayClickEnabled = false; // 新增：控制遮罩层点击是否可用

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
    // 禁用遮罩层点击，防止事件穿透导致立即关闭
    overlayClickEnabled = false;

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

    // 延迟启用遮罩层点击，防止事件穿透（iOS需要更长延迟）
    setTimeout(() => {
        overlayClickEnabled = true;
        console.log('Overlay click enabled');
    }, 350);
}

function closeModal() {
    if (!isModalOpen) return;

    const modal = document.getElementById('info-modal');
    const overlay = document.getElementById('modal-overlay');

    if (!modal || !overlay) return;

    // 重置标志位
    isModalOpen = false;
    overlayClickEnabled = false;

    // 移动端添加滑出动画
    if (window.innerWidth <= 640) {
        modal.style.animation = 'modalSlideDown 0.2s ease-in';
        setTimeout(() => {
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
            modal.style.animation = '';
        }, 200);
    } else {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
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
        // 使用 click 代替 mousedown/touchstart，更可靠
        overlay.addEventListener('click', (e) => {
            // 只有显式启用后才响应点击
            if (!overlayClickEnabled) {
                console.log('Overlay click blocked - not enabled yet');
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            closeModal();
        });
    }

    if (modal) {
        // 阻止弹窗内部点击冒泡到遮罩层
        modal.addEventListener('click', (e) => {
            e.stopPropagation();
        });

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