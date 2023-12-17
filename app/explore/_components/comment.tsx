import { CommentT } from '@/types'
import styles from './styles/comment.module.css'
import { formatDateTime } from '@/utils'

export default function Comment({
    id,
    content,
    createdat,
    thoughtid
}: CommentT) {
    return (
        <div className={styles.container}>
            <span className={styles.dateTime}>{formatDateTime(createdat)}</span>
            <p>{content}</p>
        </div>
    )
}
