// ===== MOBILE MENU TOGGLE =====

const navLinks = document.querySelector('.nav-links');



// ===== SIMPLE FORM VALIDATION =====
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        if (!form.checkValidity()) {
            e.preventDefault();
            alert('Please fill all required fields correctly!');
        }
    });
});
