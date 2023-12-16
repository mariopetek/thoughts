import AddCommentForm from './add-comment-form'
import Comments from './comments'
import styles from './styles/thought.module.css'
import type { ThoughtT } from '@/types/ThoughtType'

export default function Thought({ id, content, publishedat }: ThoughtT) {
    const formatDate = (date: Date) => {
        return date.toLocaleString('en-US', {
            dateStyle: 'long',
            timeStyle: 'short',
            hour12: false
        })
    }
    return (
        <div className={styles.container}>
            <span className={styles.dateTime}>{formatDate(publishedat)}</span>
            <p>{content}</p>
            <div className={styles.separator}></div>
            <AddCommentForm thoughtid={id} />
            <div className={styles.separator}></div>
            <Comments thoughtid={id} />
        </div>
    )
}
