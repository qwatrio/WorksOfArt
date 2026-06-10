// Поиск
document.addEventListener('DOMContentLoaded', () => {
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

// Модальное окно для видео
function openVideoModal(videoUrl, title) {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('modalVideo');
    const videoTitle = document.getElementById('videoTitle');

    video.src = videoUrl;
    videoTitle.textContent = title;
    modal.style.display = 'flex';
    video.play();

    // Блокируем прокрутку страницы
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('modalVideo');

    video.pause();
    video.src = '';
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Модальное окно для картинок
function openImageModal(imageUrl, title, artist) {
    const modal = document.getElementById('imageModal');
    const img = document.getElementById('modalImage');
    const imageTitle = document.getElementById('imageTitle');
    const imageArtist = document.getElementById('imageArtist');

    img.src = imageUrl;
    imageTitle.textContent = title;
    imageArtist.textContent = artist;
    modal.style.display = 'flex';

    // Блокируем прокрутку страницы
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Закрытие по клику вне модального окна
window.onclick = function(event) {
    const videoModal = document.getElementById('videoModal');
    const imageModal = document.getElementById('imageModal');

    if (event.target === videoModal) {
        closeVideoModal();
    }
    if (event.target === imageModal) {
        closeImageModal();
    }
}

// Закрытие по Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeVideoModal();
        closeImageModal();
    }
});