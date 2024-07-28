
    document.addEventListener('DOMContentLoaded', function() {
        const sections = document.querySelectorAll('.scroll-section');

        function onScroll() {
            const windowHeight = window.innerHeight;

            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;

                if (sectionTop < windowHeight * 0.8) {
                    section.classList.add('in-view');
                } else {
                    section.classList.remove('in-view');
                }
            });
        }

        window.addEventListener('scroll', onScroll);
        onScroll(); // Trigger scroll event on page load
    });
