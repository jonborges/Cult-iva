import styles from "./Container.module.css";
import PropTypes from "prop-types";

function Container({ children }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};