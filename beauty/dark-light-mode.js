document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('modeToggle');
    const body = document.body;
    
    // Load saved mode from local storage
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
        body.classList.add(savedMode);
    }

    // Toggle between dark and light mode
    modeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            localStorage.setItem('mode', 'light-mode');
        } else {
            body.classList.add('dark-mode');
            localStorage.setItem('mode', 'dark-mode');
        }
    });
});
