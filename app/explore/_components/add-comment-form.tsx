'use client'
import { useState } from 'react'
import styles from './styles/add-comment-form.module.css'
import CommentButton from './comment-button'
import { addComment } from '../_actions/add-comment'
import ErrorContainer from '@/components/error-container'

const maxCharacteres = 255
export default function AddCommentForm({ thoughtid }: { thoughtid: string }) {
    const [error, setError] = useState<string | undefined>()
    const [showCommentForm, setShowCommentForm] = useState(false)
    const [content, setContent] = useState('')

    const handleTextAreaChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setContent(event.target.value)
    }

    async function addCommentClient(formData: FormData) {
        const response = await addComment(formData, thoughtid)
        if (response?.error) {
            setError(response.error)
            setTimeout(() => {
                setError(undefined)
            }, 7000)
        } else {
            setError(undefined)
            setContent('')
        }
    }
    return (
        <>
            {showCommentForm ? (
                <form action={addCommentClient} className={styles.form}>
                    <input
                        className={styles.hideCommentFormButton}
                        type="button"
                        value="Close"
                        title="Close"
                        onClick={() => setShowCommentForm(false)}
                    />
                    <textarea
                        className={styles.textArea}
                        name="content"
                        id="content"
                        value={content}
                        onChange={handleTextAreaChange}
                        maxLength={maxCharacteres}
                        placeholder="Add a comment..."
                        required
                    ></textarea>
                    <div className={styles.underContainer}>
                        <span className={styles.characterCount}>
                            {content.length} / {maxCharacteres}
                        </span>
                        <input
                            className={styles.clearButton}
                            type="button"
                            value="Clear"
                            onClick={() => setContent('')}
                            disabled={content.length == 0}
                            title="Clear the text area"
                        />
                    </div>
                    <CommentButton />
                </form>
            ) : (
                <input
                    title="New comment"
                    type="button"
                    value="New comment"
                    onClick={() => setShowCommentForm(true)}
                    className={styles.showCommentFormButton}
                />
            )}
            {error && <ErrorContainer text={error} />}
        </>
    )
}
