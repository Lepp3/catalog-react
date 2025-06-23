import { Link } from "react-router-dom"

function HomePageComponent(){
    return(
        <>
        <p>Welcome to...this</p>
        <p>Perhaps you would like to see our <Link to={`/catalog`}>Catalog</Link>?</p>
        </>
    )
}

export default HomePageComponent