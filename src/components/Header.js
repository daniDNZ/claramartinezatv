import { FaPaw } from 'react-icons/fa';

export default function Header() {

    const toggle = (element) => {
        const eToCollapse = document.querySelector(element);
        const nav = document.querySelector('.nav');
        eToCollapse.classList.toggle('show');

        if (nav.classList.contains('bg-secondary--light')) {
            nav.classList.remove('bg-secondary--light');
            nav.classList.add('bg-secondary');
        } else if (nav.classList.contains('bg-secondary')){
            nav.classList.remove('bg-secondary');
            nav.classList.add('bg-secondary--light');
        }

    }

    const changeColor = (scrollPos) => {
        const nav = document.querySelector('.nav');
        const collapse = document.querySelector('.nav__collapse');

        if(scrollPos !== 0 && nav.style.backgroundColor !== '#add9c9b3') {
            nav.classList.remove('bg-transparent');
            collapse.classList.remove('bg-transparent');
            collapse.classList.add('bg-secondary');

            if ( collapse.classList.contains('show')) {
                nav.classList.add('bg-secondary');
            } else {
                nav.classList.add('bg-secondary--light');
            }

        } else if (scrollPos === 0 && !nav.classList.contains('bg-transparent')){
            nav.classList.remove('bg-secondary--light');
            nav.classList.add('bg-transparent');
            collapse.classList.remove('bg-secondary');
            collapse.classList.add('bg-transparent');
        }
    }

    // Change nav color when scrollY !== 0

    let last_known_scroll_position = 0;
    let ticking = false;

    window.addEventListener('scroll', e => {
        last_known_scroll_position = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(() => {
                changeColor(last_known_scroll_position);
                ticking = false;
            });
        }
        ticking = true;
    });


    // Detect the click to close menu
    window.onclick = (e) => {
        const clicked = e.target;
        const navCollapse = document.querySelector('.nav__collapse');
        if (!clicked.matches('.collapser__btn')) {
            if(navCollapse.classList.contains('show')) toggle('.nav__collapse')
        }
    }


    return (
        <header className="header">
            <nav className="nav">
                <div className="nav__collapser">
                    <a href="#headline" className="nav__a a" title="Home">Clara Martínez ATV</a>
                    <button className="nav__a a collapser__btn" onClick={() => toggle('.nav__collapse')}><FaPaw /></button>
                </div>
                <ul className="nav__ul nav__collapse">
                    <li className="nav__li">
                        <a href="#proficiencies" className="nav__a a" title="Competencias" >Competencias</a>
                    </li>
                    <li className="nav__li">
                        <a href="#about" className="nav__a a" title="Sobre mí" >Sobre mí</a>
                    </li>
                    <li className="nav__li">
                        <a href="#contact" className="nav__a a" title="Contacto" >Contacto</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}