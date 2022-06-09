import cPic from '../../assets/img/staff2.jpg';
import {BsLinkedin, BsInstagram} from 'react-icons/bs';

export default function About() {

    return (
        <>
            <section id="about" className="section about">
                <div className="container">
                    <h2 className="h2">¿Quién soy?</h2>
                    <p className="p about__p">
                        <img src={cPic} alt="Retrato de Clara Martínez" className="about__pic" />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero voluptates soluta alias repellat temporibus veniam tempore magni, ipsa perspiciatis illo voluptatibus consectetur fugit unde possimus labore id vero ipsum accusamus harum maxime? Exercitationem dolor harum ipsa blanditiis. Blanditiis fugiat, similique accusamus quo recusandae libero nostrum voluptatum, natus rerum aperiam ipsa.
                        <br />
                        <br />
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum nisi sit soluta ea voluptate incidunt, similique minus sed veniam error tenetur aut excepturi. Iste porro hic quidem! Tempore odit, nemo, explicabo aliquid ad nostrum, laborum vero aperiam numquam sit dolor nihil. Atque repellat, maxime ipsa veniam officia tempora cumque est?
                    </p>
                    <div className="about__social">
                        <a href="#" className="social__a"><BsLinkedin /></a>
                        <a href="#" className="social__a"><BsInstagram /></a>
                    </div>
                </div>
            </section>
        </>
    );
}