'use client'
import { useEffect } from 'react'
import NewThoughtForm from './_components/new-thought-form'
import styles from './page.module.css'

export default function Publish() {
    useEffect(() => {
        if ('Notification' in window) {
            Notification.requestPermission()
        }
        if (Notification.permission === 'granted') {
            new Notification('Welcome to Thoughts!')
        }
    }, [])
    return (
        <div className={styles.container}>
            <NewThoughtForm />
        </div>
    )
}
