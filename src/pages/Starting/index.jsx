import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Starting.module.css"

function Starting() {
    return (
        <div className={styles.container}>
            <Header />
            <h3>Iniciando na botânica decorativa.</h3>
            <section className={styles.left}>
                <h1>Escolha das Plantas.</h1>
                
               <a href="https://www.terra.com.br/vida-e-estilo/casa-e-decoracao/viva-decora/plantas-ornamentais-confira-35-especies-para-o-seu-jardim,15fd71cabfad7336981cc55be7b3e820mwzmvz8j.html" target="_blank" ><span>Saiba mais sobre escolha das plantas aqui.</span></a> 
                <p>Ao começar na botânica decorativa, a escolha das plantas é fundamental. É importante considerar fatores como a luminosidade do ambiente, a disponibilidade de espaço e o nível de manutenção que cada espécie exige. Plantas como suculentas e cactos são ideais para iniciantes, pois requerem pouca água e cuidados simples. Já plantas como samambaias e filodendros podem necessitar de mais atenção, mas proporcionam um verde exuberante e decorativo.</p>
            </section>
            <section className={styles.right}>
                <h1>Solo e Substrato.</h1>
                <a href="https://eos.com/pt/blog/tipos-de-solo/" target="_blank"><span>Saiba mais sobre Solo e Substrato aqui.</span></a>
                <p>O solo é o alicerce para o crescimento saudável das plantas. Para cada tipo de planta, existe um tipo de substrato ideal que promove a absorção correta de nutrientes e água. Plantas suculentas, por exemplo, precisam de um solo bem drenado, enquanto plantas tropicais se beneficiam de um solo mais rico e úmido. Conhecer as necessidades específicas de cada planta é essencial para seu desenvolvimento saudável.</p>
            </section>
            <section className={styles.left}>
                <h1>Regas e Nutrição.</h1>
                <a href="https://www.fazverde.com.br/regar-plantas/" target="_blank"><span>Saiba mais sobre Regas e Nutrição aqui.</span></a>
                <p>A rega correta e a nutrição adequada são pilares cruciais na botânica decorativa. É vital entender a frequência e a quantidade de água que cada planta necessita, evitando tanto o ressecamento quanto o excesso de água, que pode causar apodrecimento das raízes. Além disso, o uso de fertilizantes apropriados ajuda a manter as plantas nutridas e vigorosas. Fertilizantes orgânicos são uma excelente opção para quem busca uma abordagem mais natural.</p>
            </section>
            <section className={styles.right}>
                <h1>Poda e Manutenção.</h1>
                <a href="https://www.escoladebotanica.com.br/post/_poda" target="_blank"><span>Saiba mais sobre Poda e Manutenção aqui.</span></a>
                <p>A poda regular e a manutenção são essenciais para a saúde e a estética das plantas. A remoção de folhas mortas ou doentes, a poda para controlar o crescimento e a verificação periódica de pragas são práticas que garantem que as plantas permaneçam bonitas e saudáveis. Além disso, a replantação em vasos maiores à medida que as plantas crescem é importante para que elas tenham espaço suficiente para se desenvolver.
                Iniciar na botânica decorativa pode ser uma experiência gratificante e relaxante. Com esses quatro pilares em mente, qualquer pessoa pode transformar seu espaço em um oásis verde e encantador.</p>
            </section>
            <Footer />
        </div>
    )
}

export default Starting;