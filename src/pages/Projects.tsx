import ResumeCard from '../components/ResumeCard';
import Calculator from '../components/Calculator';

export default function Projects() {
    return (
        <>
            <title>Resume | Projects</title>

            <h2 id="main-title">Projects</h2>

            <div id = "projects-row">


                <ResumeCard
                    className="project-container"
                    title="Citizen Database Program"
                    detail="Java and JavaFX"
                />

                <ResumeCard
                    className="project-container"
                    title="Monopoly Game"
                    detail="C++"
                />


                <Calculator />

            </div>

        </>
    )
}
