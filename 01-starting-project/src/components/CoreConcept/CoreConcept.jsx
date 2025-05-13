import "./CoreConcept.css"

export default function CoreConcept(props) { // Can use object destructuring 
    return (
        <li>
            <img src={props.image} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    )
}