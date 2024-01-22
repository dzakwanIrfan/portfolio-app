export default function Nav({children}) {
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
            {children}
        </nav>
    );
} 