import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./layout.module.css";

function MainNavLink({ children, href }) {
    const router = useRouter();

    const classes =
        router.asPath === href
            ? `${styles.mainNavLink} ${styles.selected}`
            : styles.mainNavLink;

    return (
        <Link href={href}>
            <a href={href} className={classes}>
                {children}
            </a>
        </Link>
    );
}

export default MainNavLink;
