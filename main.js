const menuButton = document.querySelector('[data-menu-button]');
    
if (menuButton) {
    menuButton.addEventListener('click', (e) => {
        e.preventDefault();

        const menu = document.querySelector('[data-menu]'); 
        const visibleClass = 'visible';
        const menuOpen = menu.classList.contains(visibleClass);
        const toggleMenuOpen = !menuOpen;
    
        menuButton.setAttribute('aria-expanded', toggleMenuOpen);

        // no custom css needed here, just using tailwind classes.
        // if we wanted some more fancy css / animations in the real world,
        // i'd probably just toggle 'active' and apply css to .active separately! :-) 
        menu.classList.toggle('invisible');
        menu.classList.toggle(visibleClass);
    })
}