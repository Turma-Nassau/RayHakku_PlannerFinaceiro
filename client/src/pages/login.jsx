import react from 'react';
import axios from 'axios';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';

import './styles/main.css';

export default function Login() {
    const [email, setEmail] = react.useState('')
    const [password, setPassword] = react.useState('')
    const [login, setLogin] = react.useState(false)
    const navigate = useNavigate()
    const LOGO = logo
     const [user, setUser] = react.useState({})
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const config = {
            method: 'POST',
            url: 'http://localhost:8001/api/users/login',
            data:{
                email: email,
                senha: password
            }
        }
        axios(config).then((res)=>{ 
            setUser(res.data)
            setLogin(true)
            try {
                localStorage.setItem('user', JSON.stringify(res.data))
                navigate('/dashboard')
            } catch (error) {
                console.log(error)
            }
            
            
        }).catch((error)=>{
            if(error.response.status === 400){
                alert('senha incorreta')
            }
            if(error.response.status === 404){
                alert('Email não encontrado')
            }
        })
    }

    return (
        <div>
            <div className='formCard'>
                <img src={LOGO} alt="Logo" className='imgLogo' />
                <form onSubmit={(e)=>handleSubmit(e)} >
                    <div>
                        <label htmlFor="Email" className='formLabel' >Email
                            <input type="email" name="email" id="email" className='formInput' value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="Password" className='formLabel' >Senha
                            <input type="password" name="password" id="password" className='formInput' value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </label>
                    </div>
                    <div>
                        <input type="submit" value="Login" className='formButton' onClick={(e)=>handleSubmit(e)} />
                    </div>
                </form>
                <Link to = {'/register'} className='formSecondButton'>Cadastre-se</Link>
            </div>

            <Outlet />
        </div>
    )
}