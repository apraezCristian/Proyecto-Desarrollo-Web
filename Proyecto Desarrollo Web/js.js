document.addEventListener("DOMContentLoaded", function () {
    const avatars = document.querySelectorAll('.avatar');

    function redireccionarA(url) {
        window.location.href = url;
    }

    avatars.forEach(avatar => {
        avatar.addEventListener('click', function () {
            // Remueve la clase "seleccionado" de todos los avatares
            avatars.forEach(av => av.classList.remove('seleccionado'));

            // Agrega la clase "seleccionado" al avatar seleccionado
            this.classList.add('seleccionado');

            // Actualiza el texto del avatar seleccionado
            const nombreAvatar = this.getAttribute('alt');
            document.getElementById('avatarSeleccionado').textContent = nombreAvatar;
        });
    });

    // Manejador del clic en el botón "Mesas"
    document.querySelectorAll('[data-url]').forEach(element => {
        element.addEventListener('click', function () {
            const url = this.getAttribute('data-url');
            redireccionarA(url);
        });
    });
});
