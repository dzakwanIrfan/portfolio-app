import Link from "next/link";

export default function NavLink({i, active} : {i: string; active: boolean}) {
    const links = [
        { name: 'HOME', href: '/'},
        { name: 'CONTACT', href: '/#contact'},
        { name: 'PROJECTS', href: '/#project'},
        { name: 'EXTRAS', href: 'extras'},
        { name: 'ARTICLES', href: '/'},
    ];

    const navClass = active ? "nav-links active" : "nav-links";

    return (
        <nav id={i} className={navClass}>
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