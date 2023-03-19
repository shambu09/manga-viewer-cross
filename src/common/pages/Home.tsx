const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            {import.meta.env.VITE_BASE_URL}
        </div>
    );
};

export default Home;
