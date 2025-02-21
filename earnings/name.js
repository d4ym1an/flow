document.addEventListener('DOMContentLoaded', function() {
    const names = ['Fabin', 'Sabe', 'Clean', 'Yellow', 'Yzz.mtz', 'Fragger', 'Delta', 'Elite', 'Sheep', 'Egoist', 'adv', 'Slicer', 'Kovaaks', 'Axl', 'Zaowan', 'Lobotomy', 'Akney']; // Add the names you want to recognize
    const imageUrl = '/imgs/flow.jpg';

    names.forEach(name => {
        const elements = document.querySelectorAll('*');
        elements.forEach(element => {
            if (element.children.length === 0 && new RegExp(`\\b${name}\\b`, 'i').test(element.textContent)) {
                const parts = element.textContent.split(new RegExp(`\\b${name}\\b`, 'i'));
                element.innerHTML = '';

                parts.forEach((part, index) => {
                    element.appendChild(document.createTextNode(part));
                    if (index < parts.length - 1) {
                        const span = document.createElement('span');
                        span.textContent = name;
                        span.style.color = '#ff5000';

                        const img = document.createElement('img');
                        img.src = imageUrl;
                        img.width = 25;
                        img.height = 25;
                        img.style.marginLeft = '5px';

                        element.appendChild(span);
                        element.appendChild(img);
                    }
                });
            }
        });
    });
});