import { useState } from 'react';
import { useOutletContext } from 'react-router';
import Card from './Card';
import styles from '../styles/Card.module.css';

const CartCard = ({ id = crypto.randomUUID(), name = 'blank item', image = 'no image', qty = 0 }) => {
    const [qtyValue, setQtyValue] = useState(qty);
    const [products, addToCart, cartProducts, editCartQty] = useOutletContext();


    function handleQuantityIncrement() {
        const newQty = qtyValue + 1;
        setQtyValue(newQty);
        editCartQty({ id: id, qtyValue: newQty })
    }

    function handleQuantityDecrement() {
        if (!qtyValue > 0) return;
        const newQty = qtyValue - 1;
        setQtyValue(newQty);
        editCartQty({ id: id, qtyValue: newQty })
    }

    function handleQuantityInput(e) {
        setQtyValue(Number(e.target.value));
    }

    function handleRemoveFromCart() {
        const newQty = 0;
        setQtyValue(newQty);
        editCartQty({ id: id, qtyValue: 0 })
    }

    return (
        <Card className={styles.cartCard}
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
                <button onClick={handleRemoveFromCart}>X</button>
            </div>
        </Card>
    );
}

export default CartCard;