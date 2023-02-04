import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Detail(){

    let names = sessionStorage.getItem("name")

    let {id} = useParams()
    return <div>
        <Link to={"/"}><button>⏪</button></Link>
        Country Id: {id}
        <br></br>
        Country Name: {names}
        </div>
}