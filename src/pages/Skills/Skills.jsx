
import { CardSkill } from '../../components/CardsSkills/CardsSkills'
import './styles.scss'

import imgHTML from "../../assets/images/html.png"
import imgCSS from "../../assets/images/css.png"
import imgJS from "../../assets/images/javascript.png"
import imgReact from "../../assets/images/react.png"
import imgGit from "../../assets/images/git.png"
import imgSass from "../../assets/images/sass.png"

export const Skills = () => {
    return (
        <section id='skills'>
            <h2>Habilidades</h2>
            <div className="container-cards">
                <CardSkill imagem={imgHTML} texto="HTML" />
                <CardSkill imagem={imgCSS} texto="CSS" />
                <CardSkill imagem={imgJS} texto="JAVASCRIPT"  />
                <CardSkill imagem={imgReact} texto="REACT" />
                <CardSkill imagem={imgGit} texto="GIT" />
                <CardSkill imagem={imgSass} texto="SASS" />
            </div>
        </section>

    )
}