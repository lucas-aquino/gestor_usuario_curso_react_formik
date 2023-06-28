import './App.css'
import { useState } from 'react'
import Card from './components/Card'
import CardTitle from './components/CardTitle'
import Form from './components/Form'



function App() {

  const [usuarios, setUsuarios] = useState([])
  
  

  const submit = (usuario) => {
    setUsuarios([
      ...usuarios,
      usuario
    ])
  }

  return (
    <div className='font-sans flex justify-center h-screen bg-slate-900 '>
      <div className='container flex flex-col justify-center h-100'>
        <div className='self-center'>
          <Card className='mb-8'>
            <CardTitle>Registro</CardTitle>
            <Form
              submit={submit}
            />
          </Card>
          <Card>
            <div className='flex flex-col mb-5'>
              <CardTitle className=''>Usuarios Registrados</CardTitle>
              <table className='table-auto text-slate-400'>
                <thead className='border-b'>
                  <tr>
                    <th className='py-3 text-left'>Nombre y apellido</th>
                    <th className='py-3 text-left'>Correo</th>
                  </tr>
                </thead>
                <tbody>
                  {usuarios.map((e) => 
                    <tr>
                      <td>{`${e.nombre} ${e.apellido}`}</td>
                      <td>{`${e.correo}`}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default App
