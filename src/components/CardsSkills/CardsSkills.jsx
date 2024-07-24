import './styles.scss'


export const CardSkill = (props) => {
    return (
        <article className='card'>
            <img src={props.imagem} alt="" />
            <span>{props.texto}</span>
        </article>
    )
}