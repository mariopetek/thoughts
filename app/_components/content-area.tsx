'use client'
import { useState } from 'react'
import styles from './styles/content-area.module.css'

export default function ContentArea() {
    const [content, setContent] = useState('')
    const maxCaracteres = 255

    const handleTextAreaChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setContent(event.target.value)
    }

    return (
        <>
            <textarea
                className={styles.textArea}
                name="content"
                id="content"
                value={content}
                onChange={handleTextAreaChange}
                maxLength={maxCaracteres}
                placeholder="What is on your mind?"
                required
            ></textarea>
            <div className={styles.underContainer}>
                <span className={styles.span}>
                    {content.length} / {maxCaracteres}
                </span>
                <input
                    className={styles.clearButton}
                    type="button"
                    value="Clear"
                    onClick={() => setContent('')}
                    disabled={content.length == 0}
                    title="Clear the text area"
                />
            </div>
        </>
    )
}
