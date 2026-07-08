import styles from '../styles/Card.module.css';

const Card = ({ item = { name: 'blank item' } }) => {
    return (
        <div className={styles.card}>
            <header>
                <p>{item.name}</p>
            </header>
            <div>
                <img src={null} alt={item.name} />
            </div>
        </div>
    );
}

export default Card;