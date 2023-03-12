const navIcon = document.querySelector('#navDiv span');

navIcon.addEventListener('click', () => {
    
    
    if (navIcon.classList.contains('collapsed')){
        navIcon.classList.toggle('collapsed');
        navIcon.classList.toggle('open');
        document.querySelector('#navDiv span a').className = 'fa fa-times';
    }
    else if (navIcon.classList.contains('open')) {
            navIcon.classList.toggle('collapsed');
            navIcon.classList.toggle('open');
            document.querySelector('#navDiv span a').className = 'fa fa-bars';
        
    }

});