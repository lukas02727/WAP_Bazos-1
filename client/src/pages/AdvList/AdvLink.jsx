import { Link } from "react-router-dom"

export default function AdvLink(props) {
   
    return (
        <>
            <Link to={`/adv/${props._id}`}>
                <p>{props.name}</p>
            </Link>
        </>
    )
}