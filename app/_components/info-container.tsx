'use client'
import { FaInfoCircle } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import styles from './styles/info-container.module.css'

export default function InfoContainer({ text }: { text: string }) {
    return (
        <div className={styles.container}>
            <IconContext.Provider value={{ className: styles.infoIcon }}>
                <FaInfoCircle />
            </IconContext.Provider>
            <p>{text}</p>
        </div>
    )
}
