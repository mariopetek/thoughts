'use client'
import { useState } from 'react'
import styles from './styles/add-comment-form.module.css'
import ContentArea from '@/components/content-area'
import CommentButton from './comment-button'
import { addComment } from '../_actions/add-comment'

export default function AddCommentForm({ thoughtid }: { thoughtid: string }) {
    const [error, setError] = useState<string | undefined>()
    const [showCommentForm, setShowCommentForm] = useState(false)
    async function addCommentClient(formData: FormData) {
        const response = await addComment(formData, thoughtid)
        if (response?.error) {
            setError(response.error)
        } else {
            setError(undefined)
        }
    }
    return showCommentForm ? (
        <form action={addCommentClient} className={styles.form}>
            <input
                className={styles.hideCommentFormButton}
                type="button"
                value="Close"
                title="Close"
                onClick={() => setShowCommentForm(false)}
            />
            <ContentArea placeholder="Add a comment..." />
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
    )
}
