document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const currentMode = document.body.classList.contains('dark-mode') ? 'Dark' : 'Light';
    document.getElementById('theme-toggle').textContent = `Toggle ${currentMode} Mode`;
});