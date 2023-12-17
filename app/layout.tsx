import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'

const montserrat = Montserrat({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-montserrat'
})

export const metadata: Metadata = {
    title: 'Thoughts',
    description:
        'App for publishing your thoughts as part of Advanced Web Development course',
    manifest: '/manifest.json'
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={montserrat.className}>
                <Header />
                {children}
            </body>
        </html>
    )
}
