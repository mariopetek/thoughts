import Link from 'next/link'
import HeaderLink from './header-link'

import styles from './styles/header.module.css'

type Link = {
    href: string
    label: string
}
export default function Header() {
    const links: Link[] = [
        {
            href: '/',
            label: 'New Thought'
        },
        {
            href: '/thoughts',
            label: 'Thoughts'
        }
    ]
    return (
        <header className={styles.header}>
            {links.map(link => (
                <HeaderLink
                    key={link.href}
                    href={link.href}
                    label={link.label}
                />
            ))}
        </header>
    )
}
