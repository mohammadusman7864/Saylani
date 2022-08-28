import axios from "axios"
import { useState } from "react"

export default function Login() {
    const initialState = {
        email: "",
        password: ""
    }
    const [state, setState] = useState(initialState)
    const handleLogin = async () =>{
        try{
            const user = await axios.post("http://localhost:5000/users/login", state)
            console.log(user)
        }catch(e){
            console.log(e)
        }
    }
    return <><h1>login</h1>
    <input type="text" name="email" placeholder="Enter Your Email" onChange={e => setState({...state, "email": e.target.value})}/>
    <input type="password" name="password" placeholder="Enter Your password" onChange={e => setState({...state, "password": e.target.value})}/>
    <button onClick={handleLogin}>login</button>
    </>
}