import { db } from '@/db'
import styles from './page.module.css'
import Thought from './_components/thought'
import SuccessContainer from '@/components/success-container'

type Thought = {
    id: string
    content: string
    publishedat: Date
}

export default async function Explore({
    searchParams
}: {
    searchParams: { id: string }
}) {
    const { rows: thoughts }: { rows: Thought[] } = await db.query(
        'SELECT * FROM thought ORDER BY publishedat DESC'
    )
    return (
        <div className={styles.container}>
            <h2>Public thoughts</h2>
            {thoughts.map(thought => (
                <>
                    <Thought
                        key={thought.id}
                        id={thought.id}
                        content={thought.content}
                        publishedAt={thought.publishedat}
                    />
                    {searchParams.id === thought.id && (
                        <SuccessContainer text="Thought published successfully!" />
                    )}
                </>
            ))}
        </div>
    )
}
