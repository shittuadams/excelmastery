// Countdown Timer Script
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration; // Reset timer so it never reaches zero
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5, // Set timer for 5 minutes
        display = document.querySelector('#timer');
    startTimer(fiveMinutes, display);
};

// FAQ Toggle Script
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', event => {
        const answer = event.target.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// Form Submission Script
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for joining the WhatsApp group for the course "Excel Mastery: From Zero to Hero in Just 8 Days!"');
    window.location.href = 'https://chat.whatsapp.com/BrOMtpbxtat63p61fMakPs'; // Redirects to WhatsApp group link after form submission
});
