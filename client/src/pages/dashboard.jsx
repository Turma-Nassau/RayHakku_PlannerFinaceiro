import axios from 'axios'
import react,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from './Component/Modal'
import ModalEdit from './Component/ModalEditar'
import './styles/main.css'

function Contas (){
    const user = JSON.parse(localStorage.getItem('user'))
    const [contas, setContas] = react.useState()
    const [activeConta, setActiveConta] = react.useState('')
    const [activeSaldo, setActiveSaldo] = react.useState('')
    const [activeItemId, setActiveItemId] = react.useState(0)
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
            <div className='grid grid-cols-3   grid-flow-col-dense' >
                {contas && contas.conta.map((conta)=>{
                    return(
                        <div key={conta.id} className='formCard m-5 '>
                            <p className='formLabel'>{conta.nome_banco}</p>
                            <p className='formLabel textColorGreen w-fit mx-auto '>Saldo:R${conta.saldo_banco}</p>
                            <p>ID:{conta.id}</p>
                            <ModalEdit
                                nome={conta.nome_banco}
                                saldo={conta.saldo_banco}
                                contaId={conta.id}
                            />
                             <button className='formSecondButton m-0' onClick={

                                ()=>{
                                    axios.delete(`http://localhost:8001/api/conta/${conta.id}`).then((res)=>{
                                        console.log(res)
                                        getContas()
                                        
                                        window.location.reload()
                                    }).catch((error)=>{
                                        console.log(error)
                                    })
                                }
                             } >Remover</button> 
                        </div>
                    )
                })}
                
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
             <h1 className='h1C' >Ola {nome} {sobrenome}</h1>
           <h2 className='h2a'>Saldo Total</h2>
              <p className='h1C'>R${saldoTotal}</p>
            <Contas />
            <Modal  />
            <button onClick={deslogar} className='formSecondButton mx-auto'>Deslogar</button>  
        </div>
    )
}

