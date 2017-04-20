import '../styles/styles.scss';

// Toggle test mode (Ctrl + T)
window.addEventListener('keyup', (e) => {
    // Toggle `test-mode` class on html tag
    if (e.ctrlKey && e.key === 't') {
        document.documentElement.classList.toggle('test-mode');
    }
});
