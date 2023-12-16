'use client'
import { useState } from 'react'
import { publishThought } from '../_actions/publish-thought'
import ContentArea from '../../components/content-area'
import InfoContainer from '../../components/info-container'
import PublishButton from './publish-button'
import styles from './styles/new-thought-form.module.css'
import ErrorContainer from '@/components/error-container'
import SuccessContainer from '@/components/success-container'

export default function NewThoughtForm() {
    const [error, setError] = useState<string | undefined>()
    const [success, setSuccess] = useState(false)

    async function publishThoughtClient(formData: FormData) {
        const response = await publishThought(formData)
        if (response?.error) {
            setError(response.error)
            setSuccess(false)
            setTimeout(() => {
                setError(undefined)
            }, 7000)
        } else {
            setError(undefined)
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false)
            }, 7000)
        }
    }

    return (
        <>
            <form className={styles.form} action={publishThoughtClient}>
                <h2>Create a thought</h2>
                <InfoContainer
                    text="Anonymously share with others what is currently on your mind. Be careful
                what you say because anyone is going to be able
                to see your published thought and leave a comment on it. After publishing
                your thought you won't be able to edit/delete it."
                />
                <ContentArea placeholder="What is on your mind?" />
                <PublishButton />
            </form>
            {error && <ErrorContainer text={error} />}
            {success && (
                <SuccessContainer text="Thought published successfully!" />
            )}
        </>
    )
}
