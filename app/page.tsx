import { db } from '@/db'

export default async function NewThought() {
    const { rows } = await db.query('SELECT * FROM thought')
    console.log(rows)
    return <h1>New Thought</h1>
}
