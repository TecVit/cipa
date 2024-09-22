function getTopPositionRelativeToPage(element) {
    var rect = element.getBoundingClientRect();
    var scrollTop = window.scrollY || window.pageYOffset;
    return rect.top + scrollTop;
}

const animacoes = () => {
    const elements = document.querySelectorAll('[data-animation]');
    const classAnimation = "animationClass";
    const windowTop = window.scrollY + ((window.innerHeight * 4.5) / 4);
    
    elements.forEach( async (element) => {
        const positionElemento = await getTopPositionRelativeToPage(element);
        if (Number(windowTop) >= positionElemento - 100) {
            element.classList.add(classAnimation);
        }
    });
}

export { animacoes, getTopPositionRelativeToPage };