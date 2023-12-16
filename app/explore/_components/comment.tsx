import { CommentT } from '@/types/CommentType'
import styles from './styles/comment.module.css'

export default function Comment({
    id,
    content,
    createdat,
    thoughtid
}: CommentT) {
    return (
        <div className={styles.container}>
            <span className={styles.dateTime}></span>
            <p>{content}</p>
        </div>
    )
}
