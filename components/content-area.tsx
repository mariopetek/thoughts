'use client'
import { useEffect, useState } from 'react'
import styles from './styles/content-area.module.css'

export default function ContentArea({
    transcript,
    placeholder
}: {
    transcript?: string
    placeholder: string
}) {
    const [content, setContent] = useState('')
    const maxCharacteres = 255

    const handleTextAreaChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setContent(event.target.value)
    }

    useEffect(() => {
        setContent(transcript || '')
    }, [transcript])

    return (
        <>
            <textarea
                className={styles.textArea}
                name="content"
                id="content"
                value={content}
                onChange={handleTextAreaChange}
                maxLength={maxCharacteres}
                placeholder={placeholder}
                required
            ></textarea>
            <div className={styles.underContainer}>
                <span className={styles.characterCount}>
                    {content.length} / {maxCharacteres}
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
