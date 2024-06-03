document.addEventListener('DOMContentLoaded', () => {
    let spotsLeft = 20;
    const spotsLeftElement = document.getElementById('spots-left');

    const interval = setInterval(() => {
        if (spotsLeft > 0) {
            spotsLeft--;
            spotsLeftElement.textContent = `${spotsLeft} spots left`;
        } else {
            clearInterval(interval);
        }
    }, 1000);
});
