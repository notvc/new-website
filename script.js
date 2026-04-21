function myFunction() {
    const navLi = document.querySelector('.nav-li');
    const navBtn = document.querySelector('.nav-big-button');
    const hamburger = document.querySelector('.hamburger');
    navLi.classList.toggle('show');
    navBtn.classList.toggle('show');
    hamburger.innerHTML = navLi.classList.contains('show') ? '&#10005;' : '&#9776;';
}