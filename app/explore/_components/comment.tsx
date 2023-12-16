import { CommentT } from '@/types/CommentType'
import styles from './styles/comment.module.css'

export default function Comment({
    id,
    content,
    createdat,
    thoughtid
}: CommentT) {
    const formatDate = (date: Date) => {
        return date.toLocaleString('en-US', {
            dateStyle: 'long',
            timeStyle: 'short',
            hour12: false
        })
    }
    return (
        <div className={styles.container}>
            <span className={styles.dateTime}>{formatDate(createdat)}</span>
            <p>{content}</p>
        </div>
    )
}
