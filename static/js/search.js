document.addEventListener('DOMContentLoaded', () => {
    // Поиск
    const searchInput = document.getElementById('searchInput');
    const items = document.querySelectorAll('.item');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            
            items.forEach(item => {
                const title = item.getAttribute('data-title');
                if (title.includes(query)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
});

// Видео: раскрытие плеера внутри карточки
function toggleVideo(headerElement) {
    const item = headerElement.closest('.item');
    const videoPlayer = item.querySelector('.video-player');
    
    if (videoPlayer.style.display === 'none') {
        videoPlayer.style.display = 'block';
        const video = videoPlayer.querySelector('video');
        video.play();
    } else {
        videoPlayer.style.display = 'none';
        const video = videoPlayer.querySelector('video');
        video.pause();
    }
}

// Картинки: fullscreen overlay
function openFullscreen(imageUrl, title, artist) {
    const overlay = document.getElementById('fullscreenOverlay');
    const img = document.getElementById('fullscreenImage');
    const titleEl = document.getElementById('fullscreenTitle');
    const artistEl = document.getElementById('fullscreenArtist');
    
    img.src = imageUrl;
    titleEl.textContent = title;
    artistEl.textContent = artist;
    overlay.classList.add('active');
    
    document.body.style.overflow = 'hidden';
}

function closeFullscreen() {
    const overlay = document.getElementById('fullscreenOverlay');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Закрытие по клику на overlay
document.addEventListener('click', (e) => {
    const overlay = document.getElementById('fullscreenOverlay');
    if (overlay && overlay.classList.contains('active')) {
        closeFullscreen();
    }
});

// Закрытие по ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeFullscreen();
    }
});