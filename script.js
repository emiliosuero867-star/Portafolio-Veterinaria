document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(emailValue)) {
            emailError.style.display = 'block';
            emailInput.classList.add('is-invalid');
            return;
        } else {
            emailError.style.display = 'none';
            emailInput.classList.remove('is-invalid');
        }

        const nombre = document.getElementById('nombre').value;
        const mensaje = document.getElementById('mensaje').value;

        const mailtoLink = `mailto:contacto@vethuellitasfelices.do?subject=Consulta%20Vet-Huellitas%20Felices%20de%20${encodeURIComponent(nombre)}&body=${encodeURIComponent(mensaje)}`;
        
        window.location.href = mailtoLink;

        setTimeout(() => {
            const confirmModal = new bootstrap.Modal(document.getElementById('confirmModal'));
            confirmModal.show();
            contactForm.reset();
        }, 800);
    });

    emailInput.addEventListener('input', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(emailInput.value.trim())) {
            emailError.style.display = 'none';
            emailInput.classList.remove('is-invalid');
            emailInput.classList.add('is-valid');
        } else {
            emailInput.classList.remove('is-valid');
        }
    });
});