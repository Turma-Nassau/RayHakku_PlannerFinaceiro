import axios from 'axios'
import react,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

import './styles/main.css'

function Contas (){
    const user = JSON.parse(localStorage.getItem('user'))
    const [contas, setContas] = react.useState()


    const getContas = () => {
            axios.get(`http://localhost:8001/api/conta/user/${user.id}`).then((res)=>{
            setContas(res.data)
            console.log(res.data)
         })
    }

    useEffect(getContas, [setContas, user.id])
    console.log(contas)
    
    

    return(
        <div>
            <h1>Contas</h1>
            <div>
                <ul>
                    {contas && contas.conta.map((conta)=>{
                        return(
                            <li key={conta.id}>
                                <p>{conta.nome_banco}</p>
                                <p>{conta.saldo_banco}</p>
                            </li>
                        )
                    })}
                </ul>   
            </div>
        </div>
    )
}


export default function Dashboard() {
    const user = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate()
    const verifyLogged = () => {
        if(user === null){
            navigate('/')
        }
    }
    useEffect(verifyLogged, [user, navigate])
    const nome = user.nome
    const sobrenome = user.sobrenome
    const [saldoTotal, setSaldoTotal] = react.useState(0)

    const getSaldoTotal = () => {
        axios.get(`http://localhost:8001/api/conta/user/${user.id}`).then((res)=>{
            const contas = res.data.conta
            let saldoTotal = 0
            contas.forEach((conta)=>{
                saldoTotal += conta.saldo_banco
            })
            setSaldoTotal(saldoTotal)
        })
    }

    useEffect(getSaldoTotal, [setSaldoTotal, user.id])
     


   const deslogar = () => {
        localStorage.removeItem('user')
        navigate('/')
   }

    return(
        <div>
             <h1>Ola {nome} {sobrenome}</h1>
           <h2>Saldo Total</h2>
              <p>R${saldoTotal}</p>
            <Contas />
            <button className='formButton'>Adicionar Conta</button>
            <button onClick={deslogar} className='formSecondButton'>Deslogar</button>  
        </div>
    )
}

