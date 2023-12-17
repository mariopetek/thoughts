import { formatDateTime } from '@/utils'
import AddCommentForm from './add-comment-form'
import Comments from './comments'
import styles from './styles/thought.module.css'
import type { ThoughtT } from '@/types'

export default function Thought({ id, content, publishedat }: ThoughtT) {
    return (
        <div className={styles.container}>
            <span className={styles.dateTime}>
                {formatDateTime(publishedat)}
            </span>
            <p>{content}</p>
            <div className={styles.separator}></div>
            <AddCommentForm thoughtid={id} />
            <div className={styles.separator}></div>
            <Comments thoughtid={id} />
        </div>
    )
}
