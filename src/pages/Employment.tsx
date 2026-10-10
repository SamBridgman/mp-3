import ResumeCard from '../components/ResumeCard';
export default function Employment() {
    return (
        <>
            <h2 id="main-title">Employment</h2>

            <div id = "employment-row">

                <ResumeCard
                    className="employment-container"
                    title="Operations and Architecture Intern at Butterknife"
                    detail="Current"
                />

                <ResumeCard
                    className="employment-container"
                    title="Founding Engineer at a Stealth Startup"
                    detail="Current"
                />

                <ResumeCard
                    className="employment-container"
                    title="Co-Founder at Knit Studios"
                    detail="Current"
                />

                <ResumeCard
                    className="employment-container"
                    title="CS412 Course Grader at Boston University"
                    detail="Sep 2025 - May 2026"
                />

                <ResumeCard
                    className="employment-container"
                    title="Full Stack Developer at Skipper Inc"
                    detail="Previous"
                />

                <ResumeCard
                    className="employment-container"
                    title="Web Design Intern at FORGE Design Studios"
                    detail="Previous"
                />


            </div>

        </>
    )
}
