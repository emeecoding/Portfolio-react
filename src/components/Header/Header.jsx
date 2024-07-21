import "./styles.scss"

import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";



export const Header = () => {
    return (
        <header id="header">
                <div class="logo">
                    <a id="title-portfolio" href="#">&lt;Port<span>fólio</span>/&gt;</a>
                </div>
                <nav class="menu-desktop">
                    <ul>
                        <li>
                            <a class="btn" id="home" href="#">Início</a>
                        </li>
                        <li>
                            <a class="skills" href="#About-me">Sobre Mim</a>
                        </li>
                        <li>
                            <a class="about-me" href="#habilidades">Habilidades</a>
                        </li>
                        <li>
                            <a class="projects" href="#projetos">Projetos</a>
                        </li>
                    </ul>
                </nav>
                <div class="rede-sociais">
                    <BsInstagram className="icon"/>
                    <BsGithub className="icon" />
                    <BsLinkedin className="icon" />
                </div>
        </header>
    )
}