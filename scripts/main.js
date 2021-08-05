const tabs = document.querySelector('.cars__tabs-items');
tabs.addEventListener('click', function (e) {
    let target = e.target.closest('A');
    e.preventDefault();
    document.querySelectorAll('.cars__tabs-item').forEach(elem => elem.classList.remove('cars__tabs-item--active'));
    target.classList.add('cars__tabs-item--active');

    document.querySelectorAll('.cars__tabs-content').forEach(elem => elem.classList.remove('cars__tabs-content--active'));
    let href = target.getAttribute('href').slice(1);
    document.getElementById(`${href}`).classList.add('cars__tabs-content--active');
});
const burger = document.querySelector('.header__burger');
burger.addEventListener('click', function (e) {
    e.preventDefault();
    burger.classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active');
    document.body.classList.toggle('lock');
    document.querySelector('.btn').classList.toggle('active');
})
$(function () {
    $('.cars__slider').slick({
        arrows: true,
        prevArrow: `<svg class="slick-prev" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.75 17.75L2 9.875L8.75 2" stroke="#333333" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        nextArrow: `<svg class="slick-next" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.25 2.25L9 10.125L2.25 18" stroke="#333333" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                }
            },
        ]
    });
});

const links = document.querySelector(`.header__list`).querySelectorAll('a[href^="#"]');

for (let link of links) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        let elementID = link.getAttribute('href').slice(1);
        document.getElementById(elementID).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        burger.classList.toggle('active');
        document.querySelector('.header__menu').classList.toggle('active');
        document.body.classList.toggle('lock');
    })
}


const anchors = document.querySelectorAll('.orderAnchor');
for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#contacts').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    })
};
