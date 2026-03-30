const audio = document.getElementById('track');
const toggleBtn = document.getElementById('toggleBtn');
const volumeSlider = document.getElementById('volume');
const volValueText = document.getElementById('volValue');

audio.volume = volumeSlider.value;

toggleBtn.onclick = () => {
    if (audio.paused) {
        audio.play();
        toggleBtn.textContent = 'PAUSE';
    } else {
        audio.pause();
        toggleBtn.textContent = 'PLAY';
    }
};

audio.onended = () => { toggleBtn.textContent = 'PLAY'; };

volumeSlider.oninput = (e) => {
    const val = e.target.value;
    audio.volume = val;
    volValueText.textContent = Math.round(val * 100) + '%';
};

document.getElementById('tgBtn').onclick = (e) => {
    e.preventDefault();
    window.open("https://t.me/Subobratullina", "_blank");
};

document.getElementById('dsBtn').onclick = (e) => {
    e.preventDefault();
    window.open("https://discord.com/users/1321498217891762216", "_blank");
};

document.getElementById('ttBtn').onclick = (e) => {
    e.preventDefault();
    window.open("https://tiktok.com/@miaus1k", "_blank");
};

document.getElementById('steamBtn').onclick = (e) => {
    e.preventDefault();
    window.open("https://steamcommunity.com/id/MRYC1K", "_blank");
};