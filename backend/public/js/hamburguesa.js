let menu = document.querySelector('.header-contenedor-bars')
            let barra = document.querySelector('.header-nav')
            console.log(barra)
        
            function toggleMenu (event) {
                barra.classList.toggle('display');
         /*  document.querySelector( ".menuppal" ).classList.toggle("is_active");
          event.preventDefault(); */
        }
        menu.addEventListener('click', toggleMenu, false);