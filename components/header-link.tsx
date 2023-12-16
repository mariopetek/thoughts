'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './styles/header-link.module.css'

export default function HeaderLink({
    href,
    label
}: {
    href: string
    label: string
}) {
    const pathname = usePathname()

    const getClassName = (href: string) => {
        return `${styles.link} ${pathname == href && styles.linkActive}`
    }
    const isDisabled = (href: string) => {
        return pathname == href
    }

    return (
        <Link href={href} className={getClassName(href)}>
            {label}
        </Link>
    )
}
