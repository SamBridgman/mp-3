import { Link } from "react-router";


export default function Footer() {
    return (
        <footer>
            <p>All rights reserved by Sam Bridgman {<Link to={'/'}>Credits</Link>} &copy;</p>
        </footer>
    )
}