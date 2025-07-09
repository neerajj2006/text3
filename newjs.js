//for nav bar for div 1 and 2
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        const topBar = document.querySelector('.top-bar');

        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            topBar.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
            topBar.classList.remove('scrolled');
        }
    });

    function toggleMenu() {
        const leftMenu = document.querySelector('.left-menu');
        const rightMenu = document.querySelector('.right-menu');
        leftMenu.classList.toggle('active');
        rightMenu.classList.toggle('active');
    }



   
    

