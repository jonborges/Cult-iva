import { useState, useEffect } from "react";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Product.module.css";

function Product() {
    const [containers, setContainers] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleAddContainer = () => {
        setContainers(containers + 1);
    };

    return (
        <div className={styles.page}>
            <Header />
            <div className={styles.product}>
                <div className={styles.figurecontainer}>
                    <figure className={styles.figure}>
                        <img src="/images/product.png" alt="Descrição do produto" />
                    </figure>
                    <div className={styles.details}>
                        <h2 className={styles.name}>Nome do Produto</h2>
                        <p className={styles.price}>$ 50</p>
                        <p className={styles.description}>Descrição detalhada do produto.</p>
                    </div>
                </div>
                {[...Array(containers)].map((_, index) => (
                    <Container key={index}>
                        {[1, 2, 3, 4].map(index => (
                            <Card
                                key={index}
                                image="/images/picture.png"
                                description="Cachepot unique P"
                                price="R$ 24,50"
                            />
                        ))}
                    </Container>
                ))}
                <button className={styles.addButton} onClick={handleAddContainer}>
                  ▼
                </button>
            </div>
            <Footer />
        </div>
    );
}

export default Product;
