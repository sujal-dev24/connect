document.addEventListener('DOMContentLoaded', () => {
    const shareBtn = document.getElementById('shareBtn');

    shareBtn.addEventListener('mouseenter', () => {
        shareBtn.style.animation = 'float 3s ease-in-out infinite';
    });

    shareBtn.addEventListener('mouseleave', () => {
        shareBtn.style.animation = '';
    });

    shareBtn.addEventListener('click', () => {
        if (navigator.share) {
            navigator.share({
                title: 'Social Media Hub',
                text: 'Check out my social media links!',
                url: window.location.href
            }).then(() => {
                console.log('Thanks for sharing!');
            }).catch(console.error);
        } else {
            alert('Web Share API is not supported in your browser.');
        }
    });
});
