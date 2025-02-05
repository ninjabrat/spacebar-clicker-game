let clickCount = localStorage.getItem('clickCount') ? parseInt(localStorage.getItem('clickCount')) : 0;

document.getElementById('clickCount').innerText = clickCount;

document.body.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        clickCount++;
        document.getElementById('clickCount').innerText = clickCount;
        localStorage.setItem('clickCount', clickCount);
    }
});
