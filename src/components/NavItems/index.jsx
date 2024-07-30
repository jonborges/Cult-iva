import styles from "./NavItems.module.css"


function NavItems() {
    return (
    <ul className={styles.navitems}>
        <li>Fertilizantes</li>
        <li>Vasos</li>
        <li>Cachepó</li>
        <li>Suportes</li>
        <li>Plantas grandes</li>
        <li>Plantas pequenas</li>
    </ul>
    )
}

export default NavItems;