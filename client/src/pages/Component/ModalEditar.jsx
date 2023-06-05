import React, { useState } from "react";
import "../styles/main.css"
import axios from "axios";

const ModalEdit = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [nome, setNome] = useState(props.nome)
  const [saldo, setSaldo] = useState(props.saldo)
  const [contaId, setContaId] = useState(props.contaId)
  const user = JSON.parse(localStorage.getItem('user'))
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.patch(`http://localhost:8001/api/conta/${contaId}`, {
            nome: nome,
            saldo: saldo,
            idUsuario: user.id
    }).then(()=>{
      setShowModal(false)
      window.location.reload()
    })
  }
  return (
<>
      <button
        className="mx-auto formButton"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Editar
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Adicionar Banco</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="rounded px-8 pt-6 pb-8 w-full" onSubmit={(e => handleSubmit(e))}>
                    
                    
                    <label className="formLabel">
                      Nome do Banco
                    </label>
                    <input className="formInput w-full mb-5" value={nome} onChange={e => setNome(e.target.value)} required />
                    <label className="formLabel">
                      Saldo do Banco
                    </label>
                    <input className="formInput  w-full mb-5"  value={saldo} onChange={e => setSaldo(e.target.value)} required />
                  </form>
                </div>
                <div className="flex p-4 border-t  ">
                  <button
                    className="formSecondButton mr-2 "
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="formButton"
                    type="button"
                    onClick={e => handleSubmit(e)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ModalEdit;
