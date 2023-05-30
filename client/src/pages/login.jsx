import react from 'react';
import axios from 'axios';
import { Link, Outlet, useNavigate } from 'react-router-dom';


import './styles/login.css';

export default function Login() {
    const [email, setEmail] = react.useState('')
    const [password, setPassword] = react.useState('')
    const [login, setLogin] = react.useState(false)
    const navigate = useNavigate()

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
        axios(config).then(()=>{
            setLogin(true)
            navigate('/dashboard')
            
        }).catch((error)=>{
            console.log(error.response)
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
            <div>
                <form onSubmit={(e)=>handleSubmit(e)} >
                    <div>
                        <label htmlFor="Email" className='LabelsInputs' >Email
                            <input type="email" name="email" id="email" className='Input' value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="Password" className='LabelsInputs' >Senha
                            <input type="password" name="password" id="password" className='Input' value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </label>
                    </div>
                    <div>
                        <input type="submit" value="Login" className='Button' onClick={(e)=>handleSubmit(e)} />
                    </div>
                    {login ? (<p>Logado</p>) : (<p>Não logado</p>)}
                </form>
                <Link to = {'/register'}>Cadastre-se</Link>
            </div>

            <Outlet />
        </div>
    )
}