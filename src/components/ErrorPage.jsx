import NavBar from "./NavBar";

const ErrorPage = () => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <h2>Error: Page does not exist.</h2>
            </main>
        </>
    );
}

export default ErrorPage;