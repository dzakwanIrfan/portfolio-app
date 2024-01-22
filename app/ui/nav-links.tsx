import Link from "next/link";

export default function NavLink() {
    const links = [
        { name: 'HOME', href: '/'},
        { name: 'CONTACT', href: '/#contact'},
        { name: 'PROJECTS', href: '/#project'},
        { name: 'EXTRAS', href: 'extras'},
        { name: 'ARTICLES', href: '/'},
    ];

    return (
        <nav>
            {links.map((link) => {
                return(
                    <Link
                        key={link.name}
                        href={link.href}
                    >
                        {link.name}
                    </Link>
                )
            })

            }
        </nav>
    );
} 