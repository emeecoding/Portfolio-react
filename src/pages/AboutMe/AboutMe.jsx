import imgEmersonAboutMe from "../../assets/images/eme.png"
import "./styles.scss"


import { useEffect, useLayoutEffect, useRef } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all"



export const AboutMe = () => {

    gsap.registerPlugin(ScrollTrigger)
    useLayoutEffect(() => {
        gsap.fromTo(".img-aboutMe", {
            opacity: 0,
            y: 200,
            x: -300,
        }, {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 2,
            delay: 1,
            ease: "sine.out",
            scrollTrigger: {
                trigger: "#about-me",
                start: "top 300px",
                end: "bottom 900px",
                scrub: true,

            }
        })
        gsap.fromTo(".title-h2-about", {
            opacity: 0,
            y: 300,
            x: 300,
        }, {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 2,
            delay: 1,
            ease: "sine.out",
            scrollTrigger: {
                trigger: "#about-me", // trigger serve para selecionar o item que vai começar a animação, nesse caso na seção Aboutme
                start: "top 300px",
                end: "bottom 900px",
                scrub: true, // scrub da o efeito da imagem aparecendo quando desce o scroll e sumindo quando sobe.
            }
        })
        gsap.fromTo(".txt-aboutMe", {
            opacity: 0,
            y: 300,
        }, {
            opacity: 1,
            y: 0,
            duration: 2,
            delay: 1,
            ease: "sine.out",
            scrollTrigger: {
                trigger: "#about-me", // trigger serve para selecionar o item que vai começar a animação, nesse caso na seção Aboutme
                start: "top 300px",
                end: "bottom 900px",
                scrub: true, // scrub da o efeito da imagem aparecendo quando desce o scroll e sumindo quando sobe.
            }
        })
        return () => {
            gsap.killTweensOf(".emerson")
        }
    }, [])


    return (
        <section id="about-me">
            <div className="title-aboutMe" >
                <h2 className="title-h2-about">Sobre Mim</h2>
            </div>
            <div className="container-aboutMe" >
                <div className="img-aboutMe">
                    <img className="emerson" src={imgEmersonAboutMe} width={450} alt="imagem-Emerson" />
                </div>
                <div className="txt-aboutMe">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, quas reiciendis blanditiis id, laudantium cumque corporis maiores odio dicta ut quibusdam itaque eum necessitatibus dolore pariatur, nisi beatae magnam suscipit.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, quas reiciendis blanditiis id, laudantium cumque corporis maiores odio dicta ut quibusdam itaque eum necessitatibus dolore pariatur, nisi beatae magnam suscipit.</p>
                </div>
            </div>
        </section>
    )
}