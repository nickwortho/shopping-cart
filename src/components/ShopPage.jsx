import NavBar from "./NavBar";
import ItemGroup from "./ItemGroup";

const ShopPage = () => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <h2>Shop</h2>
                <ItemGroup name='Category' />
                <ItemGroup name='Category' />
                <ItemGroup name='Category' />
            </main>
        </>
    );
}

export default ShopPage;