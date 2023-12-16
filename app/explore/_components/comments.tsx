import { db } from '@/db'
import Comment from './comment'
import type { CommentT } from '@/types/CommentType'

export default async function Comments({ thoughtid }: { thoughtid: string }) {
    const { rows: comments }: { rows: CommentT[] } = await db.query(
        'SELECT * FROM comment WHERE thoughtid = $1 ORDER BY createdat DESC',
        [thoughtid]
    )
    return comments.length === 0 ? (
        <div>No comments yet.</div>
    ) : (
        comments.map(comment => (
            <Comment
                key={comment.id}
                id={comment.id}
                content={comment.content}
                createdat={comment.createdat}
                thoughtid={comment.thoughtid}
            />
        ))
    )
}
