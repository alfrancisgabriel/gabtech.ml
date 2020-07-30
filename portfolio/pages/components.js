import Link from 'next/link'
import styles from '../styles/Components.module.css'

const Nav = () => {
    {/* start nav */}
    return(
    <div className={styles.nav}>
        <div className={styles.navLinkIconWrapper}>
            <Link href="#"><a className={styles.navLinkIcon}>GabTech.ML</a></Link>
        </div>
        <div className={styles.navLinkWrapper}>
            <Link href="/"><a className={styles.navLink}>Home</a></Link>
            <Link href="/about"><a className={styles.navLink}>About</a></Link>
            <Link href="/contact"><a className={styles.navLink}>Contact</a></Link>
            <Link href="/blog"><a className={styles.navLink}>Blog</a></Link>
            <Link href="/projects"><a className={styles.navLink}>Projects</a></Link>
        </div>
    </div>
    )
    {/* end nav */}
}

export default Nav