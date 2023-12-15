import styles from './styles/thought.module.css'

export default function Thought({
    id,
    content,
    publishedAt
}: {
    id: string
    content: string
    publishedAt: Date
}) {
    const formatDate = (date: Date) => {
        return date.toLocaleString('en-US', {
            dateStyle: 'long',
            timeStyle: 'short',
            hour12: false
        })
    }
    return (
        <div className={styles.container}>
            <span>{formatDate(publishedAt)}</span>
            <p>{content}</p>
        </div>
    )
}
