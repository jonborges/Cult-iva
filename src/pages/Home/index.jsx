import BannerHome from "../../components/BannerHome";
import BannerNav from "../../components/BannerNav";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NavItems from "../../components/NavItems";
import styles from "./Home.module.css";

function Home() {
    return (
        <div className={styles.home}>
            <Header />
            <BannerHome />
            <BannerNav
                firsttext="Quero Decorar!"
                firstfigure="/images/shoppingcard.png"
                firstLink="/starting"
                secondtext="Como começar?"
                secondfigure="/images/dollar.png"
                secondLink="/kits"
                thirdtext="Quanto custa?"
                thirdfigure="/images/navigation.png"
                thirdLink="/courses"
                fourthtext="O que estudar?"
                fourthLink="/"
                backgroundColor="#242323"
            />
            <h2>Mais vendidos:</h2>
            <Container>
                {[1, 2, 3, 4].map(index => (
                    <Card
                        key={index}
                        image="/images/picture.png"
                        description="Cachepot unique P"
                        price="R$ 24,50"
                    />
                ))}
            </Container>
            <Container>
                <Card
                    image="/images/picture.png"
                    description="Cachepot unique P"
                    price="R$ 24,50"
                />
                <h2>Novidades <img src="/images/box.png" alt="box" /></h2>
                <Card
                    image="/images/picture.png"
                    description="Cachepot unique P"
                    price="R$ 24,50"
                />
            </Container>
            <NavItems />
            <Container className={styles.spacedContainer}>
                {[1, 2, 3, 4].map(index => (
                    <Card
                        key={index}
                        image="/images/picture.png"
                        description="Cachepot unique P"
                        price="R$ 24,50"
                    />
                ))}
            </Container>
            <BannerNav
                firsttext="Fique por dentro!"
                firstfigure="/images/navigation.png"
                firstLink="/"
                secondtext="Enviamos para todo o Brasil"
                secondfigure="/images/play.png"
                secondLink="/"
                thirdtext="Nossos outros sites"
                thirdfigure="/images/gift.png"
                thirdLink="/"
                fourthtext="Envie de Presente"
                backgroundColor="#C75C5C"
            />
            <Footer />
        </div>
    );
}

export default Home;
