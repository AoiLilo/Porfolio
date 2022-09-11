let popupBgConnect = document.querySelector('.popup_connect_bg');
let popupConnect = document.querySelector('.popup_connect');
let openPopupConnect = document.querySelectorAll('.open-popup_connect');
let closePopupConnect = document.querySelector('.close_popup');
let curDate = document.querySelector('.cur_date');

openPopupConnect.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBgConnect.classList.add('active');
        popupConnect.classList.add('active');
    })
});

closePopupConnect.addEventListener('click', () => {
    popupBgConnect.classList.remove('active');
    popupConnect.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if (e.target === popupBgConnect) {
        popupBgConnect.classList.remove('active');
        popupConnect.classList.remove('active');
    }
});

function updateTime() {
    let currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
if (minutes < 10){
    minutes = "0" + minutes
}
let t_str = "Местное время: " + hours + ":" + minutes + " ";
document.querySelector('.cur_date').innerHTML = t_str;
}
updateTime();
setInterval(updateTime, 60);

