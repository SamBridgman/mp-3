type ResumeCardProps = {
    title: string
    detail: string
    className?: string
}

export default function ResumeCard({title, detail, className}: ResumeCardProps) {
    return (
        <div className={className}>
            <h4>{title}</h4>
            <p><em>{detail}</em></p>
        </div>
    )
}