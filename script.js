let clickCount = localStorage.getItem('clickCount') ? parseInt(localStorage.getItem('clickCount')) : 0;
let autoClickerInterval = null;
const vaultCode = '2025';

document.getElementById('clickCount').innerText = clickCount;

document.body.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        clickCount++;
        document.getElementById('clickCount').innerText = clickCount;
        localStorage.setItem('clickCount', clickCount);
    }
});

function checkVaultCode() {
    const enteredCode = document.getElementById('vaultCode').value;
    if (enteredCode === vaultCode) {
        toggleAutoClicker();
    } else {
        alert('Incorrect vault code!');
    }
}

function toggleAutoClicker() {
    if (autoClickerInterval) {
        clearInterval(autoClickerInterval);
        autoClickerInterval = null;
        alert('Auto clicker disabled.');
    } else {
        autoClickerInterval = setInterval(() => {
            clickCount++;
            document.getElementById('clickCount').innerText = clickCount;
            localStorage.setItem('clickCount', clickCount);
        }, 1000);
        alert('Auto clicker enabled.');
    }
}
