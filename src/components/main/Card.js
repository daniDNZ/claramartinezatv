export default function Card({skill, icon}) {

    return (
        <article className="article">
            {icon}
            <h3 className="h3">{skill.title}</h3>
            <p className="p">{skill.p}</p>
            <a href={skill.linkUri} className="a article__a">{skill.link}</a>
        </article>
    )
}