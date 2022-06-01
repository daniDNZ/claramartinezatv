import Card from "./Card";
import { ReactComponent as Hand } from "../../assets/svg/hand.svg";
import { ReactComponent as Mask } from "../../assets/svg/mask.svg";
import { ReactComponent as Clean } from "../../assets/svg/clean.svg";
import { ReactComponent as Desktop } from "../../assets/svg/desktop.svg";
import { ReactComponent as Dog } from "../../assets/svg/dog.svg";
import { ReactComponent as Vaccine } from "../../assets/svg/vaccine.svg";

export default function Proficiencies(){

    const skillsList = require('../../assets/data/proficiencies.json');

    const icons = [<Mask />, <Hand />, <Vaccine />, <Clean />, <Dog />, <Desktop />];

    return (
        <>
        <section id="proficiencies" className="section section--proficiencies">
                <h2 className="h2">Competencias del Auxiliar de Veterinaria</h2>
                <div className="grid">
                    {
                        skillsList.map( (skill, index) => {
                            return <Card skill={skill} icon={icons[index]} key={`sk-${index}`}/>;
                        })
                    }
                </div>
            </section>
        </>
    )
}