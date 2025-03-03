let currentIndex = 0;
        const slides = document.querySelector('.slides');
        const totalSlides = document.querySelectorAll('.slide').length;
        
        function updateSlide() {
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
        
        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlide();
        }
        
        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlide();
        }
        
        setInterval(nextSlide, 5000); // Cambio automático cada 5 segundos