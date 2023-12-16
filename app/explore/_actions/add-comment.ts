'use server'
import { z } from 'zod'
import { db } from '@/db'
import { revalidatePath } from 'next/cache'

const contentSchema = z
    .string()
    .min(1, 'Content length must be atleast 1 character.')
    .max(255, 'Content length cannot exceed 255 characters.')

export async function addComment(formData: FormData, thoughtid: string) {
    const content = formData.get('content') as string
    const parsedContent = contentSchema.safeParse(content)
    if (parsedContent.success) {
        try {
            const { rows } = await db.query(
                'INSERT INTO comment (content, thoughtid) VALUES ($1, $2) RETURNING id',
                [content, thoughtid]
            )
            revalidatePath('/explore')
            return {
                id: rows[0].id
            }
        } catch (error) {
            return {
                error: 'An error occurred while commenting on a thought.'
            }
        }
    } else {
        return {
            error: parsedContent.error.message
        }
    }
}
