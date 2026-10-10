import ResumeCard from '../components/ResumeCard';
export default function Achievements() {
    return (
        <>
            <h2 id="main-title">Achievements</h2>

            <div id = "achievements-row">

                <ResumeCard
                    className="achievement-container"
                    title="Featured in The Daily Free Press"
                    detail="February 2025"
                />

                <ResumeCard
                    className="achievement-container"
                    title="Featured in Clark University's Newspaper"
                    detail="February 2025"
                />

                <ResumeCard
                    className="achievement-container"
                    title="Benched 315"
                    detail="September 2026"
                />



            </div>

        </>
    )
}
