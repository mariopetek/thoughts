'use client'
import { useEffect } from 'react'
import NewThoughtForm from './_components/new-thought-form'
import styles from './page.module.css'

export default function Publish() {
    /*useEffect(() => {
        'Notification' in window && Notification.requestPermission()
    })*/
    return (
        <div className={styles.container}>
            <NewThoughtForm />
        </div>
    )
}
