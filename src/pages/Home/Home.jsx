
import imgEmecoding from "../../assets/images/emecoding.png";

import "./styles.scss"



export const Home = () => {
    return (
        <section id="section-home">
            <div className="txt-topo-site">
                <h1> <span>Olá</span>, Eu sou Emerson Santos</h1>
                <p>Developer Front-end</p>
            </div>
            <div className="img-topo-site-banner">
                <img src={imgEmecoding} alt="" />
            </div>
        </section>
    )
}