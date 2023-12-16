'use client'
import { FaCheckCircle } from 'react-icons/fa'
import styles from './styles/success-container.module.css'
import { IconContext } from 'react-icons'
import { useEffect, useState } from 'react'

export default function SuccessContainer({ text }: { text: string }) {
    return (
        <div className={styles.container}>
            <IconContext.Provider value={{ className: styles.successIcon }}>
                <FaCheckCircle />
            </IconContext.Provider>
            <p>{text}</p>
        </div>
    )
}
