document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.stars');
    const verifieds = document.querySelectorAll('.verifieds');
    const leads = document.querySelectorAll('.leads');
    const trophys = document.querySelectorAll('.trophys');
    const videos = document.querySelectorAll('.videos');

    stars.forEach(star => {
        star.addEventListener('mouseenter', () => {
            showPopup(star, 'This user is a popular member.');
        });
        star.addEventListener('mouseleave', hidePopup);
    });

    verifieds.forEach(verified => {
        verified.addEventListener('mouseenter', () => {
            showPopup(verified, 'This user is verified within Kirka.io.');
        });
        verified.addEventListener('mouseleave', hidePopup);
    });

    leads.forEach(lead => {
        lead.addEventListener('mouseenter', () => {
            showPopup(lead, 'This user is apart of our lead team within flow.');
        });
        lead.addEventListener('mouseleave', hidePopup);
    });

    trophys.forEach(trophy => {
        trophys.addEventListener('mouseenter', () => {
            showPopup(trophy, 'This user has won a tourney.');
        });
        trophys.addEventListener('mouseleave', hidePopup);
    });

    videos.forEach(video => {
        videos.addEventListener('mouseenter', () => {
            showPopup(video, 'This user a content creator.');
        });
        videos.addEventListener('mouseleave', hidePopup);
    });
});

function showPopup(element, message) {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.textContent = message;
    document.body.appendChild(popup);

    const rect = element.getBoundingClientRect();
    popup.style.left = `${rect.left + window.scrollX}px`;
    popup.style.top = `${rect.bottom + window.scrollY}px`;
}

function hidePopup() {
    const popup = document.querySelector('.popup');
    if (popup) {
        popup.remove();
    }
}
