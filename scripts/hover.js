document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.stars');
    const verifieds = document.querySelectorAll('.verifieds');
    const leads = document.querySelectorAll('.leads');
    const trophys = document.querySelectorAll('.trophys');
    const contentCreators = document.querySelectorAll('.contentCreators');
    const designers = document.querySelectorAll('.designers');
    const OGs = document.querySelectorAll('.ogs');
    const comps = document.querySelectorAll('.comps');

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
        trophy.addEventListener('mouseenter', () => { // ✅ Corrected
            showPopup(trophy, 'This user has won a tourney.');
        });
        trophy.addEventListener('mouseleave', hidePopup);
    });
    
    contentCreators.forEach(contentCreator => {
        contentCreator.addEventListener('mouseenter', () => {
            showPopup(contentCreator, 'This user is a content creator.');
        });
        contentCreator.addEventListener('mouseleave', hidePopup);
    });

    designers.forEach(designer => {
        designer.addEventListener('mouseenter', () => {
            showPopup(designer, 'This user has made assets for flow.');
        });
        designer.addEventListener('mouseleave', hidePopup);
    });

    OGs.forEach(OG => {
        OG.addEventListener('mouseenter', () => {
            showPopup(OG, 'This user is an original member of flow.');
        });
        OG.addEventListener('mouseleave', hidePopup);
    }); 

    comps.forEach(comp => {
        comp.addEventListener('mouseenter', () => {
            showPopup(comp, 'This member is apart of our comp team.');
        });
        comp.addEventListener('mouseleave', hidePopup);
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
