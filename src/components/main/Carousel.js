import { useEffect } from 'react';
import { FaCircle } from 'react-icons/fa';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

export default function Carousel() {

    useEffect( () => {
        const paginationCircles = document.querySelectorAll('.carousel__circle');
        const btnPrev = document.querySelector('#btn-prev');
        const btnNext = document.querySelector('#btn-next');

        // Storing carousel pages
        const pages = document.querySelectorAll('.carousel__page');

        let currentPage = 0;                                          

        // Removing and adding classes
        const handleClasses = () => {
            document.querySelector('.carousel__on').classList.remove('carousel__on');       
            document.querySelector('.carousel__circle--active').classList.remove('carousel__circle--active');

            pages[currentPage].classList.add('carousel__on');                               
            paginationCircles[currentPage].classList.add('carousel__circle--active');
        };
    
        const changePage = () => {

            if (currentPage === 0) {                                          
                currentPage++;
            } else {
                currentPage === pages.length - 1 ? currentPage = 0 : currentPage++;
            }

            handleClasses();
    
        };

        // Nav prev arrow
        const goPrev = () => {
            clearInterval(carouselInterval);

            currentPage - 1 < 0 ? currentPage = pages.length - 1 : currentPage--;
            
            handleClasses();
            
            carouselInterval = setInterval(changePage, 5000);
        };

        // Nav next arrow
        const goNext = () => {
            clearInterval(carouselInterval);
            
            currentPage + 1 > pages.length - 1 ? currentPage = 0 : currentPage++;
            
            handleClasses();
            
            carouselInterval = setInterval(changePage, 5000);
        };

        // Listeners
        btnPrev.addEventListener('click', goPrev);
        btnNext.addEventListener('click', goNext);
    
        // 5 seconds interval
        let carouselInterval = setInterval(changePage, 5000);              


        return () => {
            clearInterval(carouselInterval);
            btnPrev.removeEventListener('click', goPrev);
            btnNext.removeEventListener('click', goNext);
        };
    });


    return(
        <>
            <div className="carousel">
                <div className="carousel__page carousel__on">
                    <h1 className="carousel__h1 h1 headline__h1">
                        Clara Martínez <br />
                        Auxiliar Técnico Veterinario c1
                    </h1> 
                </div>
                <div className="carousel__page">
                    <h1 className="carousel__h1 h1 headline__h1">
                        Clara Martínez <br />
                        Auxiliar Técnico Veterinario c2
                    </h1> 
                </div>
                <div className="carousel__page">
                    <h1 className="carousel__h1 h1 headline__h1">
                        Clara Martínez <br />
                        Auxiliar Técnico Veterinario c3
                    </h1>                 </div>
                <div className="carousel__nav carousel__nav--prev">
                    <button id="btn-prev" className="carousel__button">
                        <MdNavigateBefore className='carousel__arrow'/>
                    </button>
                </div>
                <div className="carousel__nav carousel__nav--next">
                    <button id="btn-next" className="carousel__button">
                        <MdNavigateNext className='carousel__arrow'/>
                    </button>
                </div>
                <div className="carousel__pagination">
                    <FaCircle className='carousel__circle carousel__circle--active'/>
                    <FaCircle className='carousel__circle'/>
                    <FaCircle className='carousel__circle'/>
                </div>
            </div>
        </>
    );
}