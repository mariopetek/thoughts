import Link from 'next/link'
import HeaderLink from './header-link'

import styles from './styles/header.module.css'
import Image from 'next/image'

type Link = {
    href: string
    label: string
}
export default function Header() {
    const links: Link[] = [
        {
            href: '/',
            label: 'Publish'
        },
        {
            href: '/explore',
            label: 'Explore'
        }
    ]
    return (
        <header className={styles.header}>
            <Image
                src="thoughts.svg"
                alt="Thoughts logo"
                height={35}
                width={35}
            />
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
