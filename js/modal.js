let currentSelected = null;

function showLocationInfo(data) {
    const modal = document.getElementById('info-modal');
    const overlay = document.getElementById('modal-overlay');
    
    if (!modal || !overlay) return;

    const nameEl = document.getElementById('modal-mall-name');
    const addressEl = document.getElementById('modal-address');
    const countEl = document.getElementById('modal-screen-count');
    const timeEl = document.getElementById('modal-play-time');
    const freqEl = document.getElementById('modal-frequency');

    if (nameEl) nameEl.textContent = data.name;
    if (addressEl) addressEl.textContent = data.address;
    if (countEl) countEl.textContent = data.screenCount;
    if (timeEl) timeEl.textContent = data.playTime;
    if (freqEl) freqEl.textContent = data.frequency;

    const screenContainer = document.getElementById('modal-screen-locations');
    if (screenContainer) {
        screenContainer.innerHTML = '';

        data.screenLocations.forEach((location, idx) => {
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

    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    
    if (window.innerWidth <= 640) {
        modal.style.animation = 'modalSlideUp 0.3s ease-out';
    }
    
    currentSelected = data;
}

function closeModal() {
    const modal = document.getElementById('info-modal');
    const overlay = document.getElementById('modal-overlay');
    
    if (!modal || !overlay) return;
    
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
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
});

document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('modal-overlay');
    if (overlay) {
        overlay.addEventListener('click', closeModal);
    }
    
    const infoModal = document.getElementById('info-modal');
    if (infoModal) {
        infoModal.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
});