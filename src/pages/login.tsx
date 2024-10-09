import { SetStateAction, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleChangeUser = (event: { target: { value: SetStateAction<string>; }; }) => {
        setUsername(event.target.value);
    };

    const handleChangePass = (event: { target: { value: SetStateAction<string>; }; }) => {
        setPassword(event.target.value);
    };

    return (
        <>
            <div className="text-2xl text-center py-10">
                <label className="px-1">Username: </label>
                <input type="text" value={username} onChange={handleChangeUser} placeholder="Enter your username" />
            </div>
            <div className="text-2xl text-center">
                <label className="px-1">Password: </label>
                <input type="password" value={password} onChange={handleChangePass} placeholder="Enter your password" />
            </div>

            {/* create a profile page */}
            <button style={{display: 'block', margin: '0 auto'}} className="text-2xl py-10" onClick={() => {navigate("/")}}>Submit</button>
        </>
    )
}