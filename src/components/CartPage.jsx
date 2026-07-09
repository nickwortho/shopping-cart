import { useState } from 'react';
import { useOutletContext } from 'react-router';
import ItemGroup from './ItemGroup';
import NavBar from './NavBar';
import styles from '../styles/CartPage.module.css'
import CartCard from './CartCard';

const CartPage = () => {
    const [products, addToCart, cartProducts, editCartQty] = useOutletContext();

    function findProduct(id) {
        return products.find(p => p.id === id);
    }

    return (
        <>
            <main>
                <h2>Cart</h2>
                {cartProducts.length === 0
                    ?
                    <h3> Cart is empty. </h3>
                    :
                    <ItemGroup style={styles.itemGroup} name='' >
                        {cartProducts.map(product => {
                            const productData = findProduct(product.id);
                            return <CartCard
                                key={productData.id}
                                id={productData.id}
                                name={productData.title}
                                image={productData.image}
                                qty={product.qtyValue} />
                        })}
                    </ItemGroup>
                }
            </main>
        </>
    );
}

export default CartPage;