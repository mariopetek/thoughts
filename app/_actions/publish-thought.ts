'use server'
import { z } from 'zod'
import { db } from '@/db'

const contentSchema = z
    .string()
    .min(1, 'Content length must be atleast 1 character.')
    .max(255, 'Content length cannot exceed 255 characters.')

export async function publishThought(formData: FormData) {
    const content = formData.get('content') as string
    const parsedContent = contentSchema.safeParse(content)
    if (parsedContent.success) {
        try {
            await db.query('INSERT INTO thought (content) VALUES ($1)', [
                content
            ])
        } catch (err) {
            console.log(err)
        }
    } else {
        return parsedContent.error.message
    }
}
