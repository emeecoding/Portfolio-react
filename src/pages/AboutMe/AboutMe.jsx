import imgEmersonAboutMe from "../../assets/images/eme.png"
import "./styles.scss"







export const AboutMe = () => {
    return (
        <section id="About-me">
            <div className="title-aboutMe">
                <h2>Sobre Mim</h2>
            </div>
            <div className="container-aboutMe">
                <div className="img-aboutMe">
                    <img src={imgEmersonAboutMe} width={500} alt="imagem-Emerson" />
                </div>
                <div className="txt-aboutMe">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, quas reiciendis blanditiis id, laudantium cumque corporis maiores odio dicta ut quibusdam itaque eum necessitatibus dolore pariatur, nisi beatae magnam suscipit.</p>
                </div>
            </div>

        </section>
    )
}