'use client'
import { useState } from 'react'
import { publishThought } from '../_actions/publish-thought'
import ContentArea from './content-area'
import InfoContainer from '../../components/info-container'
import PublishButton from './publish-button'
import styles from './styles/new-thought-form.module.css'
import ErrorContainer from '@/components/error-container'
import { redirect } from 'next/navigation'

export default function NewThoughtForm() {
    const [error, setError] = useState<string | undefined>()

    async function publishThoughtClient(formData: FormData) {
        const response = await publishThought(formData)
        if (response?.error) {
            setError(response.error)
        } else {
            setError(undefined)
        }
        redirect(`/explore?id=${response.id}`)
    }

    return (
        <>
            <form className={styles.form} action={publishThoughtClient}>
                <h2>Create a thought</h2>
                <InfoContainer
                    text="Share with others what is currently on your mind. Be careful
                what you say because everyone is going to be able
                to see your published thought and leave a comment on it. After publishing
                your thought you won't be able to edit/delete it."
                />
                <ContentArea />
                <PublishButton />
            </form>
            {error && <ErrorContainer text={error} />}
        </>
    )
}
