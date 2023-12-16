'use server'
import { z } from 'zod'
import { db } from '@/db'
import { revalidatePath } from 'next/cache'

const contentSchema = z
    .string()
    .min(1, 'Content length must be atleast 1 character.')
    .max(255, 'Content length cannot exceed 255 characters.')

export async function publishThought(formData: FormData) {
    const content = formData.get('content') as string
    const parsedContent = contentSchema.safeParse(content)
    if (parsedContent.success) {
        try {
            const { rows } = await db.query(
                'INSERT INTO thought (content) VALUES ($1) RETURNING id',
                [content]
            )
            revalidatePath('/explore')
            return {
                id: rows[0].id
            }
        } catch (error) {
            return {
                error: 'An error occurred while publishing a thought.'
            }
        }
    } else {
        return {
            error: parsedContent.error.message
        }
    }
}
