import { AuthRedirect } from "../components/AuthRedirect";

const Home = () => {
    return (
        <div>
            <AuthRedirect />
            <h1>Home Page</h1>
            {import.meta.env.VITE_BASE_URL}
        </div>
    );
};

export default Home;
