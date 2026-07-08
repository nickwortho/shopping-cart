import { useOutletContext } from 'react-router';
import ItemGroup from './ItemGroup';
import NavBar from './NavBar';
import styles from '../styles/CartPage.module.css'
import CartCard from './CartCard';

const CartPage = () => {
    const products = useOutletContext();
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <h2>Cart</h2>
                <ItemGroup style={styles.itemGroup} name='' >
                    <CartCard />
                    <CartCard />
                    <CartCard />
                </ItemGroup>
            </main>
        </>
    );
}

export default CartPage;