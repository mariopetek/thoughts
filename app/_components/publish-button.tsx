'use client'

import { useFormStatus } from 'react-dom'
import styles from './styles/publish-button.module.css'

export default function PublishButton() {
    const { pending } = useFormStatus()
    return (
        <button
            className={styles.button}
            disabled={pending}
            title="Publish thought"
        >
            {pending ? 'Publishing...' : 'Publish'}
        </button>
    )
}
