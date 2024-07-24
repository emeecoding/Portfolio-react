
import project1 from "../../assets/images/project1.png"


import "./styles.scss"

export const Projects = () => {
    return (
        <section id="projects">
            <h2>Projetos</h2>
            <div className="container-projects">
                <img src={project1} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque illo, quae assumenda, blanditiis explicabo quidem voluptates rerum minima cupiditate alias cum doloribus numquam, delectus nostrum voluptate? Aliquam nihil maiores suscipit!</p>
            </div>
        </section>
    )
}