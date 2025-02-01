const categorySelector = document.querySelector('.categories');

let isDragging = false;
let startX, scrollLeft;

categorySelector.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - categorySelector.offsetLeft;
    scrollLeft = categorySelector.scrollLeft;
    categorySelector.classList.add('dragging');
});

categorySelector.addEventListener('mouseleave', () => {
    isDragging = false;
    categorySelector.classList.remove('dragging');
});

categorySelector.addEventListener('mouseup', () => {
    isDragging = false;
    categorySelector.classList.remove('dragging');
});

categorySelector.addEventListener('mousemove', (e) => {
    if (!isDragging) return; // Exit if not dragging
    e.preventDefault();
    const x = e.pageX - categorySelector.offsetLeft;
    const scroll = (x - startX) * 1; // Speed of dragging
    categorySelector.scrollLeft = scrollLeft - scroll;
});