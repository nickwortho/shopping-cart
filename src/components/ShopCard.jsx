import { useState } from 'react';
import Card from './Card';
import styles from '../styles/Card.module.css';

const ShopCard = ({ id = crypto.randomUUID(), name = 'blank item', image = 'no image' }) => {
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
        <Card className={styles.card}
            id={id}
            name={name}
            image={image}>
            <div className={styles.qtyGroup}>
                <label htmlFor={id}>Qty:</label>
                <input type='number' id={id} name='quantity'
                    value={qtyValue} onChange={(e) => handleQuantityInput(e)}></input>
                <div className={styles.qtyBtns}>
                    <button onClick={handleQuantityIncrement}>+</button>
                    <button onClick={handleQuantityDecrement}>-</button>
                </div>
                <button>Add</button>
            </div>
        </Card>
    );
}

export default ShopCard;