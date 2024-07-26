document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    function checkSectionInView() {
        const viewportHeight = window.innerHeight;

        sections.forEach(section => {
            const { top, bottom } = section.getBoundingClientRect();
            if (top < viewportHeight && bottom > 0) {
                section.classList.add('in-view');
            } else {
                section.classList.remove('in-view');
            }
        });
    }

    window.addEventListener('scroll', checkSectionInView);
    checkSectionInView(); // Initial check
});
