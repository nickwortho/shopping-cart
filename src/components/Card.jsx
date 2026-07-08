import { useState } from 'react';
import styles from '../styles/Card.module.css';
const Card = ({ item = { name: 'blank item' } }) => {
    const [qtyValue, setQtyValue] = useState(null);


    function handleQuantityIncrement() {
        setQtyValue(qty => qty + 1);
    }

    function handleQuantityDecrement() {
        if (!qtyValue > 0) return;
        setQtyValue(qty => qty - 1);
    }


    return (
        <div className={styles.card}>
            <header>
                <p>{item.name}</p>
            </header>
            <div>
                <img src={null} alt={item.name} />
            </div>
            <div className={styles.qtyGroup}>
                <label for='quantity'>Qty:</label>
                <input type='number' name='quantity' value={qtyValue}></input>
                <div className={styles.qtyBtns}>
                    <button onClick={handleQuantityIncrement}>+</button>
                    <button onClick={handleQuantityDecrement}>-</button>
                </div>
                <button>Add</button>
            </div>
        </div>
    );
}

export default Card;