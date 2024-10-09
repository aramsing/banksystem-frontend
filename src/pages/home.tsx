import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <header className="font-bold text-4xl py-10 text-center">
                <h1>BankSystem</h1>
            </header>
            <main className="h-screen">
                <div className="text-2xl text-center">
                    <label>Login to your account: </label>
                    <button onClick={() => {navigate("/login")}}>Login</button>
                </div>
            </main>

            
        </div>
    );
}