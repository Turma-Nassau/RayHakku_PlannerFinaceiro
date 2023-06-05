import react from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

import './styles/main.css'

export default function Register() {
    const [name, setName] = react.useState('')
    const [sobrenome, setSobrenome] = react.useState('')
    const [email, setEmail] = react.useState('')
    const [password, setPassword] = react.useState('')
    const [passwordConfirm, setPasswordConfirm] = react.useState('')
    const [register, setRegister] = react.useState(false)
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        const config = {
            method: 'POST',
            url: 'http://localhost:8001/api/users/',
            data:{
                nome: name,
                sobrenome: sobrenome,
                email: email,
                senha: password
            }
        }
        axios(config).then(()=>{
            setRegister(true)
            navigate('/')
        }).catch((error)=>{
            console.log(error.response)
        })
    }

    return(
        <div>
            <div>
                <form onSubmit={e => handleSubmit(e)} className='formCard'>
                    <h1 className='h1C' >Cadastro</h1>
                    <div>

                    <label htmlFor="name" className='formLabel'>Nome
                    <input type="text" name="name" id="name" className='formInput' value={name} onChange={e => setName(e.target.value)} />
                    </label>

                    </div>
                    
                    <div>
                        <label htmlFor="sobrenome" className='formLabel'>Sobrenome
                        <input type="text" name='sobrenome' id='sobrenome' className='formInput' value={sobrenome} onChange={e => setSobrenome (e.target.value)} />
                        </label>

                    </div>
                    <div>

                        <label htmlFor="email" className='formLabel'>Email
                        <input type="email" name='email' id='email' className='formInput' value={email} onChange={e => setEmail (e.target.value)} />
                        </label>

                    </div>
                    <div>

                        <label htmlFor="password" className='formLabel'>Senha
                        <input type="password" name='password' id='password' className='formInput' value={password} onChange={e => setPassword (e.target.value)} />
                        </label>

                    </div>
                    <div>

                        <label htmlFor="passwordConfirm" className='formLabel'>Confirmar senha
                        <input type="password" name='passwordConfirm' id='passwordConfirm' className='formInput' value={passwordConfirm} onChange={e => setPasswordConfirm (e.target.value)} />
                        </label>

                    </div>
                    <div>

                        <input type="submit" value="Cadastrar" className='formButton' onClick={e => handleSubmit(e)} />

                    </div>
                    {register ? (<p>Cadastrado</p>) : (<p>Não cadastrado</p>)}
                </form>
                <Link to = {'/'}>Ja Possui uma Conta ?</Link>
            </div>
        </div>
    )
}


 
// SENHAS TESTE

// BrendaCorreiaCosta@dayrep.com : Quahc2koT