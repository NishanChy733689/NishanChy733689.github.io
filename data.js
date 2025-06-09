
let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

let themeToggler = document.querySelector('#theme-toggler');
themeToggler.classList.toggle('fa-sun');
themeToggler.onclick = () => {
    themeToggler.classList.toggle('fa-sun');
    if (themeToggler.classList.contains('fa-sun')) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}