const hourContainer = document.getElementById('hour');
const minutesContainer = document.getElementById('minutes');
const secondsContainer = document.getElementById('seconds');

const digitalClock = setInterval(function time() {
    let todayDate = new Date();
    let todayHour = todayDate.getHours();
    let todayMinutes = todayDate.getMinutes();
    let todaySeconds = todayDate.getSeconds();

    if(todayHour < 10) todayHour = '0' + todayHour;
    if(todayMinutes < 10) todayMinutes = '0' + todayMinutes;
    if(todaySeconds < 10) todaySeconds = '0' + todaySeconds;

    hourContainer.textContent = todayHour;
    minutesContainer.textContent = todayMinutes;
    secondsContainer.textContent = todaySeconds;
});