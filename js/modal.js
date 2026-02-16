//弹窗功能
let currentSelected = null;


function showLocationInfo(data) {
    const modal = document.getElementById('info-modal');
    const overlay = document.getElementById('modal-overlay');

    document.getElementById('modal-mall-name').textContent = data.name;
    document.getElementById('modal-address').textContent = data.address;
    document.getElementById('modal-screen-count').textContent = data.screenCount;
    document.getElementById('modal-play-time').textContent = data.playTime;
    document.getElementById('modal-frequency').textContent = data.frequency;

    const screenContainer = document.getElementById('modal-screen-locations');
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

    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    currentSelected = data;
}

function closeModal() {
    document.getElementById('info-modal').classList.add('hidden');
    document.getElementById('modal-overlay').classList.add('hidden');
    if (window.myChart) {
        window.myChart.dispatchAction({ type: 'downplay', seriesIndex: 0 });
    }
    currentSelected = null;
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
});