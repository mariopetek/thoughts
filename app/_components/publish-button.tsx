'use client'
import { useFormStatus } from 'react-dom'
import styles from './styles/publish-button.module.css'
import { IconContext } from 'react-icons'
import { FaGlobeAmericas } from 'react-icons/fa'

export default function PublishButton() {
    const { pending } = useFormStatus()
    return (
        <button
            className={styles.button}
            disabled={pending}
            title="Publish a thought"
        >
            <IconContext.Provider value={{ className: styles.globeIcon }}>
                <FaGlobeAmericas />
            </IconContext.Provider>
            {pending ? 'Publishing...' : 'Publish'}
        </button>
    )
}
