import headshot from '../assets/headshot.png'
import {Link} from "react-router";

export default function Home() {
    return (
        <>
            <title>Resume | Home</title>


            <h2 id="main-title">Home</h2>

            <div id="container-row">
                <img src={headshot} alt="Sam Bridgman"/>

                <p>My name is Sam Bridgman, and I am a Computer Science student at Boston University. I would like to
                    build on my coursework in software engineering, data structures, and algorithms through internships
                    and research, while I continue to develop my skills in JavaScript, Python, C++, Java, HTML/CSS,
                    Node.js, and React. <br/> <br/> Welcome to my website, here you will find my {<Link to={'/achievements'}>Achievements</Link>} and {<Link to={'/employment'}>Employment</Link>} history, as
                    well as other information that might be of interest to you.</p>
            </div>
        </>
    )
}