import type { ThoughtT } from '@/types'
import styles from './styles/thoughts.module.css'
import Thought from './thought'
import { db } from '@/db'

export default async function Thoughts() {
    const { rows: thoughts }: { rows: ThoughtT[] } = await db.query(
        'SELECT * FROM thought ORDER BY publishedat DESC'
    )
    return thoughts.length === 0 ? (
        <div className={styles.noThoughtsYet}>No public thoughts yet...</div>
    ) : (
        <div className={styles.thoughtsContainer}>
            {thoughts.map(thought => (
                <Thought
                    key={thought.id}
                    id={thought.id}
                    content={thought.content}
                    publishedat={thought.publishedat}
                />
            ))}
        </div>
    )
}
