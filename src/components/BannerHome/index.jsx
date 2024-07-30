import styles from "./BannerHome.module.css"

function BannerHome() {
    return  (
        <div className={styles.banner}>
            <img src="/images/banner.png" alt="imagem do banner" />
        </div>

    )
}

export default BannerHome;