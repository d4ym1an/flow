document.addEventListener('DOMContentLoaded', function() {
    const names = ['Fabin', 'Sabe', 'Clean', 'Yellow', 'Yzz.mtz', 'Fragger', 'Delta', 'Elite', 'Sheep', 'Egoist', 'adv', 'Slicer', 'Kovaaks', 'Axl', 'Zaowan', 'Lobotomy', 'Akney','TheDon','Forest','Bebote','Cloud']; // Add the names you want to recognize
    const imageUrl = '/imgs/flow.jpg';
    const trophyEmoji = '🏆'; // Trophy emoji

    const elements = document.querySelectorAll('*:not(#roster *)');
    elements.forEach(element => {
        if (element.children.length === 0) {
            let innerHTML = element.innerHTML;
            names.forEach(name => {
                const regex = new RegExp(`\\b${name}\\b`, 'gi');
                innerHTML = innerHTML.replace(regex, match => {
                    let replacement = `<span style="color: #ff5000;">${match}</span><img src="${imageUrl}" width="25" height="25" style="margin-left: 5px;">`;
                    if (element.textContent.includes('MVP:') && element.textContent.includes(match)) {
                        replacement += ` ${trophyEmoji}`;
                    }
                    return replacement;
                });
            });
            element.innerHTML = innerHTML;
        }
    });
});