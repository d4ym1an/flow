document.getElementById('scroll-to-roster').addEventListener('click', function() {
    const button = document.getElementById('scroll-to-roster');
    const roster = document.getElementById('roster');
    const tournamentsList = document.getElementById('tournaments-list');

    if (button.textContent === 'Go to Roster') {
        roster.scrollIntoView({ behavior: 'smooth' });
        button.textContent = 'Go to Wins';
    } else {
        tournamentsList.scrollIntoView({ behavior: 'smooth' });
        button.textContent = 'Go to Roster';
    }
});
