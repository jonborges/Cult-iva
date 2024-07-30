import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Courses.module.css";

function Courses() {
    return (
        <>
            <Header />
            <main className={styles.container}>
                <section>
                    <h1>Cursos grátis:</h1>
                    <p>Conteúdo gratuito que você pode explorar:</p>
                </section>
                <article>
                    <a href="https://www.plantsci.cam.ac.uk/">Botany Online</a>
                    <p>University of Cambridge</p>
                </article>
                <article>
                    <a href="https://brasilescola.uol.com.br/biologia/botanica.htm">Botânica</a>
                    <p>Brasil Escola.</p>
                </article>
                <article>
                    <a href="https://www.khanacademy.org/science/biology/plant-biology">Plant Biology</a>
                    <p>Khan Academy</p>
                </article>
            </main>
            <Footer />
        </>
    );
}

export default Courses;
