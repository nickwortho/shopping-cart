import styles from '../styles/Card.module.css';
const Card = ({ children, className, item = { name: 'blank item' } }) => {
    return (
        <div className={`${styles.card} ${className}`}>
            <header className={styles.item}>
                <p>{item.name}</p>
            </header>
            <div className={styles.item}>
                <img src={null} alt={item.name} />
            </div>
            {children}
        </div>
    );
}

export default Card;