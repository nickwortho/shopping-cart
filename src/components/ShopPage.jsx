import { useOutletContext } from 'react-router';
import NavBar from './NavBar';
import ItemGroup from './ItemGroup';
import ShopCard from './ShopCard';
import styles from '../styles/ShopPage.module.css';

const ShopPage = () => {
    const [products, addToCart, cartProducts, editCartQty] = useOutletContext();

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <h2>Shop</h2>
                <ItemGroup style={styles.itemGroup} name=''>
                    {products.map(product => {
                        return <ShopCard
                            key={product.id}
                            id={product.id}
                            name={product.title}
                            image={product.image} />
                    })}
                </ItemGroup>
            </main>
        </>
    );
}

export default ShopPage;