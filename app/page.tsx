import NewThoughtForm from './_components/new-thought-form'
import styles from './page.module.css'

export default async function Publish() {
    return (
        <div className={styles.container}>
            <NewThoughtForm />
        </div>
    )
}
