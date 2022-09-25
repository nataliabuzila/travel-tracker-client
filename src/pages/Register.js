import { useNavigate } from "react-router-dom";
import { useState} from 'react';
import { register } from "../utils/api";

export default function Register() {
  const navigate = useNavigate();
//   const handleSubmit = async (values) => {
//     // message.loading({ content: "registering account", key: "register" });
//     await register(values);
//     // message.success({ content: "account registered", key: "register" });
//     navigate("/login");
//   };

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const handleSubmit = async (values) => {
    //values.preventDefault();
    await register(values);
    navigate("/login");
}

  return (
    <div className="registerUser">
        <h5>Sign up</h5>
         <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input 
                type="text" 
                name="name" 
                value={name}
                onChange = {e=>setName(e.target.value)}
            />

           <label>E-mail: </label>
            <input 
                type="text" 
                name="email" 
                value={email}
                onChange = {e=>setEmail(e.target.value)}
            />

           <label>Password: </label>
            <input 
                type="text" 
                name="password" 
                value={password}
                onChange = {e=>setPassword(e.target.value)}
            />

            <button className="form-button" type="submit">Submit</button>

        </form>
    </div>
  );
}