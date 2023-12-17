import styles from './page.module.css'
import Thoughts from './_components/thoughts'

export default function Explore() {
    return (
        <div className={styles.container}>
            <h2>Public thoughts</h2>
            <Thoughts />
        </div>
    )
}
