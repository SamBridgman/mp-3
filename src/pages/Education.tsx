import ResumeCard from '../components/ResumeCard';
export default function Education() {
    return (
        <>
            <title>Resume | Education</title>

            <h2 id="main-title">Education</h2>

            <div id = "education-row">

                <ResumeCard
                    className="education-container"
                    title="B.A. in Computer Science at Boston University"
                    detail="Current"
                />

                <ResumeCard
                    className="education-container"
                    title="A.S. in Computer Science at Holyoke Community College"
                    detail="May 2023"
                />

                <ResumeCard
                    className="education-container"
                    title="Northampton High School"
                    detail="May 2021"
                />


            </div>

        </>
    )
}
