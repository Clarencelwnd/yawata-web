const videoItems = document.querySelectorAll('.video-item');

videoItems.forEach(item => {
  const video = item.querySelector('video');
  const playIcon = item.querySelector('.play-icon');

  playIcon.addEventListener('click', () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });

  // Tambahkan event listener untuk menangani perubahan status pemutaran video
  video.addEventListener('play', () => {
    playIcon.innerHTML = '&#10074;&#10074;'; // Ikon pause (ganda vertikal)
  });

  video.addEventListener('pause', () => {
    playIcon.innerHTML = '&#9658;'; // Ikon play (segitiga kanan)
  });
});
