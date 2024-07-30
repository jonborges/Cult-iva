import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Kits.module.css"

function Kits() {
    return (
        <div className={styles.kits}>
            <Header />
            <h1>Quanto custa?</h1>
            <div className={styles.container}>
            <ul>
                <li>
                 <h2>KIT INICIANTE</h2>
                 <img src="/images/kit.png" alt="Kit iniciante" />
                </li>

                <li>
                 <h2>KIT MEDIANO</h2>
                 <img src="/images/kit.png" alt="Kit mediano" />
                </li>

                <li>
                <h2>KIT AVANÇADO</h2>
                <img src="/images/kit.png" alt="Kit avançado" />
                </li>
            </ul>
            
            <header>
                <h1>De acordo com seu orçamento.</h1>
                <Link to={"/"}><span>clique aqui para comprar separadamente.</span></Link>
                <p>Todos os itens listados em nossos kits de botânica decorativa podem ser adquiridos separadamente, conforme a sua necessidade e preferência.
                   Entendemos que cada projeto de jardinagem é único e que você pode já possuir alguns dos itens necessários ou desejar complementá-los com produtos específicos.
                   Além disso, gostaríamos de enfatizar que seguimos rigorosamente a legislação brasileira que proíbe a venda casada. Nosso objetivo é oferecer flexibilidade e conveniência aos nossos clientes, permitindo que façam suas escolhas de forma livre e informada, sem qualquer tipo de imposição. Você tem total liberdade para selecionar apenas os produtos que atendem às suas necessidades e orçamento.</p>
            </header>
            </div>
            <Footer />
        </div>

    )
}

export default Kits;