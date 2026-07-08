import { useState } from 'react';
import Card from './Card';
import styles from '../styles/Card.module.css';

const CartCard = ({ item = { id: crypto.randomUUID(), name: 'blank item' } }) => {
    const [qtyValue, setQtyValue] = useState(0);


    function handleQuantityIncrement() {
        setQtyValue(qty => qty + 1);
    }

    function handleQuantityDecrement() {
        if (!qtyValue > 0) return;
        setQtyValue(qty => qty - 1);
    }

    function handleQuantityInput(e) {
        setQtyValue(Number(e.target.value));
    }


    return (
        <Card className={styles.cartCard}>
            <div className={styles.qtyGroup}>
                <label htmlFor={item.id}>Qty:</label>
                <input type='number' id={item.id} name='quantity'
                    value={qtyValue} onChange={(e) => handleQuantityInput(e)}></input>
                <div className={styles.qtyBtns}>
                    <button onClick={handleQuantityIncrement}>+</button>
                    <button onClick={handleQuantityDecrement}>-</button>
                </div>
                <button>X</button>
            </div>
        </Card>
    );
}

export default CartCard;