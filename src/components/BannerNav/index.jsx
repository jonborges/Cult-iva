import PropTypes from 'prop-types';
import styles from "./BannerNav.module.css";
import { Link } from 'react-router-dom';

function BannerNav({
    firsttext, secondtext, thirdtext, fourthtext,
    firstfigure, secondfigure, thirdfigure,
    firstLink, secondLink, thirdLink, 
    backgroundColor
}) {
    const bannerStyle = {
        backgroundColor: backgroundColor || 'inherit',
    };

    return (
        <ul className={styles.bannernav} style={bannerStyle}>
            <li>
                <p>{firsttext}</p>
            </li>
            <li>
                <div>
                    <Link to={firstLink}><img src={firstfigure} alt="figura de carrinho de compras" /></Link>
                    <p>{secondtext}</p>
                </div>
            </li>
            <li>
                <div>
                    <Link to={secondLink}><img src={secondfigure} alt="cifrão de real" /></Link>
                    <p>{thirdtext}</p>
                </div>
            </li>
            <li>
                <div>
                    <Link to={thirdLink}><img src={thirdfigure} alt="seta para próxima página" /></Link>
                    <p>{fourthtext}</p>
                </div>
            </li>
        </ul>
    );
}

BannerNav.propTypes = {
    firsttext: PropTypes.string.isRequired,
    secondtext: PropTypes.string.isRequired,
    thirdtext: PropTypes.string.isRequired,
    fourthtext: PropTypes.string.isRequired,
    firstfigure: PropTypes.string.isRequired,
    secondfigure: PropTypes.string.isRequired,
    thirdfigure: PropTypes.string.isRequired,
    firstLink: PropTypes.string.isRequired,
    secondLink: PropTypes.string.isRequired,
    thirdLink: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
};

export default BannerNav;
