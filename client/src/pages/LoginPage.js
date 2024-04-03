import { useState } from "react";

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassowrd] = useState('');

    async function login(e) {
        ev.preventDefault();
       await fetch('http://localhost:4000/login', {
            method: 'GET',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type':'application/json'},
        })
    }

    return(
        <form className="login" onSubmit={login}>
            <h1>Login</h1>
            <input 
                type="text" 
                placeholder="username"
                value={username}
                onChange={ev => setUsername(ev.target.value)}/>
            <input 
                type="password" 
                placeholder="password"
                value={password}
                onChange={ev => setPassowrd(ev.target.value)}/>
            <button>Login</button>
        </form>
    );
}