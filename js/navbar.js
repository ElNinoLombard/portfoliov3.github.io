const links = document.querySelectorAll('.link'); /* retourne le premier Element dans le document correspondant au sélecteur - ou groupe de sélecteurs - spécifié(s) */
const sections = document.querySelectorAll('section');

let activeLink = 0; /* pour qu'on puisse "tracker" le lien actif */

links.forEach((link, i) => {
    link.addEventListener('click', () => {                            /* We loop through each link and for each one we add an event listener */
        if(activeLink != i) {                                        /* If the link does not match the link i we do not perform anything */
            links[activeLink].classList.remove('active');           /* we select the link of the active link index to remove the active class from it */
            link.classList.add('active');                          /* this will add the active class to the clicked link */
            sections[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 1000)
        }   
    }) 
})