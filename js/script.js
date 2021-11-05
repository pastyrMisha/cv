document.addEventListener('DOMContentLoaded', function () {

    let currentElem = null;
    document.querySelectorAll('.list').forEach(function (item) {

        item.onmouseover = function (event) {
            if (currentElem) return;
            let target = event.target.parentNode;
            if (!target) return;
            if (!item.contains(target)) return;

            currentElem = target.lastElementChild;
            currentElem.classList.remove('hide_caption');
            currentElem.classList.add('show_caption');
        };

        item.onmouseout = function (event) {
            if (!currentElem) return;
            let relatedTarget = event.relatedTarget;

            while (relatedTarget) {
                if (relatedTarget == currentElem) return;
                relatedTarget = relatedTarget.parentNode;
            }

            currentElem.classList.remove('show_caption');
            currentElem.classList.add('hide_caption');
            currentElem = null;
        };
    }),
    navList = document.querySelector('.header-navigation__list'),
    exit = document.querySelector('.header-navigation__close'),
    burger = document.querySelector('.header-navigation__hamburger');
    burger.onclick = function () {
        exit.classList.add('menu_visible');
        navList.classList.add('menu_visible');
        burger.style.display = 'none';
        
    };
    exit.onclick = function () {
        exit.classList.remove('menu_visible');
        navList.classList.remove('menu_visible');
        burger.style.display = 'block';
    } 
});