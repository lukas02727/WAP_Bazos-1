import { Link } from "react-router-dom"

export default function AdvLink(props) {
   
    return (
        <>
        <div className="test">
            <Link to={`/adv/${props._id}`}>
                <p className="test_">{props.name}</p>
               
               
            </Link>
            </div>
        </>
    )
}