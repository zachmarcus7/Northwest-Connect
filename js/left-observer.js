const sideOptions = {};

const sideObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('side-faded');
            generalObserver.unobserve(entry.target);
        }
    });
}, sideOptions);

// observe all required elements at once
document.querySelectorAll('.side-fade').forEach(element => {
    sideObserver.observe(element);
});