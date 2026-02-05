import { useNavigate } from "react-router-dom";
import styles from './_styles.module.scss';

const Footer = () => {
    const navigate = useNavigate();

    const handleHomeRouting = () => {
        navigate('/');
    }
  return (
    <div className={styles.footer}>
        <button 
        className={styles.homeBtn}
        onClick={handleHomeRouting}
        >Home</button>
    </div>
  )
}

export default Footer;