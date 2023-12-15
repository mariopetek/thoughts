import { publishThought } from '../_actions/publish-thought'
import ContentArea from './content-area'
import InfoContainer from './info-container'
import PublishButton from './publish-button'
import styles from './styles/new-thought-form.module.css'

export default function NewThoughtForm() {
    return (
        <form className={styles.form} action={publishThought}>
            <h2>Create a thought</h2>
            <InfoContainer
                text="Share with others what is currently on your mind. Be careful
                what you say because everyone is going to be able
                to see your published thought and leave a comment on it. After publishing
                your thought you won't be able to edit/delete it."
            />
            <ContentArea />
            <PublishButton />
        </form>
    )
}
