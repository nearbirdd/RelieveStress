const heartButton = document.querySelector('box-icon');
const upCurtain = document.querySelector('.upCurtain');
const downCurtain = document.querySelector('.downCurtain');
const image = document.querySelector('.text');

const moveCurtains = () => {
    // Устанавливаем переходы
    downCurtain.style.transition = 'all 1s ease-in-out';
    upCurtain.style.transition = 'all 1s ease-in-out';
    
    // Верхняя штора сжимается к верху
    downCurtain.style.transform = 'scaleY(0)';
    downCurtain.style.transformOrigin = 'bottom center';
    
    // Нижняя штора сжимается к низу
    upCurtain.style.transform = 'scaleY(0)';
    upCurtain.style.transformOrigin = 'top center';
};

heartButton.addEventListener('click', function() {
    this.style.position = 'fixed';
    this.style.transition = 'all 1s ease';
    this.style.transform = 'scale(3)';
    this.style.opacity = '0';
    image.remove();
    setTimeout(moveCurtains, 1000);
});

