import { useOutletContext } from 'react-router';
import NavBar from './NavBar';
import ItemGroup from './ItemGroup';
import ShopCard from './ShopCard';
import styles from '../styles/ShopPage.module.css';

const ShopPage = () => {
    const products = useOutletContext();

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <h2>Shop</h2>
                <ItemGroup style={styles.itemGroup} name='Category 1'>
                    <ShopCard />
                    <ShopCard />
                    <ShopCard />
                    <ShopCard />
                </ItemGroup>
            </main>
        </>
    );
}

export default ShopPage;