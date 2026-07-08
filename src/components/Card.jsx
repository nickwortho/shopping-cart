import styles from '../styles/Card.module.css';
const Card = ({ children, className,
    id = crypto.randomUUID(), name = 'blank item', image = 'no image' }) => {
    return (
        <div className={`${styles.card} ${className}`}>
            <header className={styles.item}>
                <p>{name}</p>
            </header>
            <div className={styles.item}>
                <img src={image} alt={name} />
            </div>
            {children}
        </div>
    );
}

export default Card;