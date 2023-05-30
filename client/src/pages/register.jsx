import react from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

import './styles/login.css'

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
                <form onSubmit={e => handleSubmit(e)}>
                    <div>

                    <label htmlFor="name" className='LabelsInputs'>Nome
                    <input type="text" name="name" id="name" className='Input' value={name} onChange={e => setName(e.target.value)} />
                    </label>

                    </div>
                    
                    <div>
                        <label htmlFor="sobrenome" className='LabelsInputs'>Sobrenome
                        <input type="text" name='sobrenome' id='sobrenome' className='Input' value={sobrenome} onChange={e => setSobrenome (e.target.value)} />
                        </label>

                    </div>
                    <div>

                        <label htmlFor="email" className='LabelsInputs'>Email
                        <input type="email" name='email' id='email' className='Input' value={email} onChange={e => setEmail (e.target.value)} />
                        </label>

                    </div>
                    <div>

                        <label htmlFor="password" className='LabelsInputs'>Senha
                        <input type="password" name='password' id='password' className='Input' value={password} onChange={e => setPassword (e.target.value)} />
                        </label>

                    </div>
                    <div>

                        <label htmlFor="passwordConfirm" className='LabelsInputs'>Confirmar senha
                        <input type="password" name='passwordConfirm' id='passwordConfirm' className='Input' value={passwordConfirm} onChange={e => setPasswordConfirm (e.target.value)} />
                        </label>

                    </div>
                    <div>

                        <input type="submit" value="Cadastrar" className='Button' onClick={e => handleSubmit(e)} />

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