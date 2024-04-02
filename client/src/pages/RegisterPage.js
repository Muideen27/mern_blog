import { useState } from "react";

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassowrd] = useState('');

    return (
    <form className="register">
        <h1>Register</h1>
        <input  type="text" 
                placeholder="username"
                value={username}
                onChange={ev => setUsername(ev.target.value)}/>
        <input  type="password" 
                placeholder="password"
                value={password}
                onChange={ev => setPassowrd(ev.target.value)}/>
        <button>Register</button>
    </form>
    );
}