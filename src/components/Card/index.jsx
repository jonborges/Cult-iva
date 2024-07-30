import { Link } from "react-router-dom";
import styles from "./Card.module.css"
import PropTypes from 'prop-types';

function Card( {image, description, price}) {
    return (
     <div className={styles.container}>
        <figure>
        <Link to={"/product"}><img src={image} alt="item à venda"/></Link>
        <p>{description}</p>
        <span>{price}</span>
        </figure>
     </div>
    )
}

export default Card;

Card.propTypes = {
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
};