document.addEventListener('DOMContentLoaded', () => {
    console.log('DanielCoin site loaded successfully.');

    const header = document.querySelector('header');
    header.addEventListener('click', () => {
        alert('Welcome to DanielCoin!');
    });
});
