'use client'
import { IconContext } from 'react-icons'
import { FaCircleExclamation } from 'react-icons/fa6'
import styles from './styles/error-container.module.css'

export default function ErrorContainer({ text }: { text: string }) {
    return (
        <div className={styles.container}>
            <IconContext.Provider value={{ className: styles.errorIcon }}>
                <FaCircleExclamation />
            </IconContext.Provider>
            <p>{text}</p>
        </div>
    )
}
