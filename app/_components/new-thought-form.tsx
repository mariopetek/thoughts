'use client'
import 'regenerator-runtime/runtime'
import { useEffect, useState } from 'react'
import { publishThought } from '../_actions/publish-thought'
import InfoContainer from '../../components/info-container'
import PublishButton from './publish-button'
import styles from './styles/new-thought-form.module.css'
import ErrorContainer from '@/components/error-container'
import SuccessContainer from '@/components/success-container'
import {
    FaMicrophone,
    FaRegStopCircle,
    FaMicrophoneSlash
} from 'react-icons/fa'
import { IconContext } from 'react-icons'
import SpeechRecognition, {
    useSpeechRecognition
} from 'react-speech-recognition'
import { useRouter } from 'next/navigation'

const maxCharacters = 255
export default function NewThoughtForm() {
    const [content, setContent] = useState('')
    const [error, setError] = useState<string | undefined>()
    const [success, setSuccess] = useState(false)
    const [voiceRecognitionSupported, setVoiceRecognitionSupported] =
        useState(true)
    const { transcript, listening, isMicrophoneAvailable, resetTranscript } =
        useSpeechRecognition()
    const router = useRouter()

    const handleTextAreaChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setContent(event.target.value)
    }

    useEffect(() => {
        setVoiceRecognitionSupported('webkitSpeechRecognition' in window)
    }, [])
    useEffect(() => {
        voiceRecognitionSupported &&
            isMicrophoneAvailable &&
            setContent(transcript)
    }, [transcript])

    async function publishThoughtClient(formData: FormData) {
        const response = await publishThought(formData)
        if (response?.error) {
            setError(response.error)
            setSuccess(false)
            setTimeout(() => {
                setError(undefined)
            }, 7000)
        } else {
            setError(undefined)
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false)
            }, 7000)

            if (Notification.permission === 'granted') {
                const notification = new Notification(
                    'You just published a new thought.',
                    {
                        body: 'You can see it in the explore page. Click here to navigate to it.',
                        icon: '/favicon.ico',
                        requireInteraction: true
                    }
                )
                notification.addEventListener('click', () => {
                    router.push('/explore')
                    notification.close()
                })
            }
            voiceRecognitionSupported && isMicrophoneAvailable
                ? resetTranscript()
                : setContent('')
        }
    }

    return (
        <>
            <form className={styles.form} action={publishThoughtClient}>
                <h2>Create a thought</h2>
                <InfoContainer
                    text="Anonymously share with others what is currently on your mind. Be careful
                what you say because anyone is going to be able
                to see your published thought and leave a comment on it. After publishing
                your thought you won't be able to edit/delete it."
                />
                {voiceRecognitionSupported ? (
                    <div className={styles.speechRecognition}>
                        {isMicrophoneAvailable ? (
                            listening ? (
                                <div className={styles.recordingContainer}>
                                    <div
                                        className={styles.recordingIndicator}
                                    ></div>
                                    <div
                                        onClick={() => {
                                            SpeechRecognition.stopListening()
                                        }}
                                        className={`${styles.buttonContainer} ${styles.stopRecordingButton}`}
                                    >
                                        <IconContext.Provider
                                            value={{
                                                className: styles.stopIcon
                                            }}
                                        >
                                            <FaRegStopCircle />
                                        </IconContext.Provider>
                                        <span>Stop</span>
                                    </div>
                                </div>
                            ) : (
                                <div
                                    onClick={() => {
                                        SpeechRecognition.startListening({
                                            continuous: true
                                        })
                                    }}
                                    className={`${styles.buttonContainer} ${styles.startRecordingButton}`}
                                >
                                    <IconContext.Provider
                                        value={{
                                            className: styles.microphoneIcon
                                        }}
                                    >
                                        <FaMicrophone />
                                    </IconContext.Provider>
                                    <span>Record a thought</span>
                                </div>
                            )
                        ) : (
                            <div className={styles.noMicrophoneLabel}>
                                <IconContext.Provider
                                    value={{
                                        className: styles.noMicrophoneIcon
                                    }}
                                >
                                    <FaMicrophoneSlash />
                                </IconContext.Provider>
                                <span>Microphone not allowed</span>
                            </div>
                        )}
                    </div>
                ) : (
                    <p className={styles.notSupported}>
                        Unfortunately speech recognition is not supported by
                        your web browser, so you are going to have to write your
                        thought.
                    </p>
                )}

                <textarea
                    className={styles.textArea}
                    name="content"
                    id="content"
                    value={content}
                    onChange={handleTextAreaChange}
                    maxLength={maxCharacters}
                    placeholder="What is on your mind?"
                    required
                    readOnly={
                        voiceRecognitionSupported && isMicrophoneAvailable
                    }
                ></textarea>
                <div className={styles.underContainer}>
                    <span className={styles.characterCount}>
                        {content.length} / {maxCharacters}
                    </span>
                    <input
                        className={styles.clearButton}
                        type="button"
                        value="Clear"
                        onClick={() => {
                            setContent('')
                            resetTranscript()
                        }}
                        disabled={content.length == 0}
                        title="Clear the text area"
                    />
                </div>
                <PublishButton />
            </form>
            {error && <ErrorContainer text={error} />}
            {success && (
                <SuccessContainer text="Thought published successfully!" />
            )}
        </>
    )
}
