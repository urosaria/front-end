console.log('scroll');

const slider = document.querySelector('.card-carousel');
let isMouseDown = false;
let startX, scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    slider.classList.add('active');

    console.log('33 '+ slider.offsetLeft);

    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mousewheel', (e) => {
    isMouseDown = true;
    slider.classList.add('active');

    console.log('22 '+ slider.offsetLeft);

    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isMouseDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isMouseDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;

    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1;

    console.log('111 '+ x);
    console.log('111 '+ scrollLeft - walk);

    slider.scrollLeft = scrollLeft - walk;

    if(slider.scrollLeft > window.innerWidth){
        console.log('마지막?');
    }
});

