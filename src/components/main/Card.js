export default function Card({skill, icon}) {

    return (
        <article className="article">
            {icon}
            <h4 className="h4">{skill.title}</h4>
            <p className="p">{skill.p}</p>
            <a href={skill.linkUri} className="a article__a">{skill.link}</a>
        </article>
    )
}