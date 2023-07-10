import './App.css'
import { useState } from 'react'
import Card from './components/Card'
import CardTitle from './components/CardTitle'
import Button from './components/Button'
import { useFormik } from 'formik'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import TextInput from './components/TextInput'
import CheckboxInput from './components/CheckboxInput'
import SelectInput from './components/SelectInput'
import RadioInput from './components/RadioInput'


function App() {

  const [usuarios, setUsuarios] = useState([])

  const validate = values => {
    const errors = {}


    if(!values.nombre) {
      errors.nombre = 'el nombre es requerido'
    } else if (values.nombre.length < 5) {
      errors.nombre = 'El nombre es demasiado corto'
    }
    
    if(!values.apellido) {
      errors.apellido = 'el apellido es requerido'
    } else if (values.apellido.length < 5) {
      errors.apellido = 'El apellido es demasiado corto'
    }

    if(!values.correo) {
      errors.correo = 'el correo es requerido'
    } else if (values.correo.length < 5) {
      errors.correo = 'El correo es demasiado corto'
    } else if (!values.correo.includes('@') || !values.correo.includes('.')) {
      errors.correo = 'El correo no es valido'
    }
    
    if(!values.radio) {
      errors.radio = 'Es requerido'
    }

    return errors
  } 

  const formik = useFormik({
    initialValues: {
      nombre: '',
      apellido: '',
      correo: ''
    },
    validate,
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <div className='font-sans flex justify-center h-screen bg-slate-900 '>
      <div className='container flex flex-col justify-center h-100'>
        <div className='self-center'>
          {/*
          <Card className='mb-8'>
            <CardTitle>Registro</CardTitle>

            <form onSubmit={formik.handleSubmit}>
              <div className='mb-6'>


                <div className='flex flex-col mb-5 mt-1 select-none'>
                  <label className='ml-4 mb-2 text-sm font-bold text-slate-400'>Nombre</label>

                  {formik.touched.nombre && formik.errors.nombre ? 

                    <div className='flex flex-col content-center justify-center mb-5 mt-1 select-none border border-red-700 bg-red-500 rounded-lg pt-2'>
                      <span className='ml-4 mb-2 text-sm font-bold text-slate-400 capitalize text-red-700'>{formik.errors.nombre}</span>
                    </div> :
                    
                    null

                  }
                  
                  <input 
                    className='rounded-lg bg-slate-800 py-2 px-4 text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 placeholder:italic placeholder:text-slate-600 autofill:text-slate-600 autofill:bg-slate-800' 
                    placeholder='Juan'
                    type='text'
                    {...formik.getFieldProps('nombre')}
                  />
                </div>




                <div className='flex flex-col mb-5 mt-1 select-none'>
                  <label className='ml-4 mb-2 text-sm font-bold text-slate-400'>Apellido</label>

                  {formik.touched.apellido && formik.errors.apellido ? 
  
                    <div className='flex flex-col content-center justify-center mb-5 mt-1 select-none border border-red-700 bg-red-500 rounded-lg pt-2'>
                      <span className='ml-4 mb-2 text-sm font-bold text-slate-400 capitalize text-red-700'>{formik.errors.apellido}</span>
                    </div> :
  
                    null
  
                  }
                  
                  <input 
                    className='rounded-lg bg-slate-800 py-2 px-4 text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 placeholder:italic placeholder:text-slate-600 autofill:text-slate-600 autofill:bg-slate-800'
                    placeholder='Rodriguez'
                    type='text'
                    {...formik.getFieldProps('apellido')}
                  />
                </div>
                

                
                <div className='flex flex-col mb-5 mt-1 select-none'>
                  <label className='ml-4 mb-2 text-sm font-bold text-slate-400'>Correo</label>

                  {formik.touched.correo && formik.errors.correo ? 

                    <div className='flex flex-col content-center justify-center mb-5 mt-1 select-none border border-red-700 bg-red-500 rounded-lg pt-2'>
                      <span className='ml-4 mb-2 text-sm font-bold text-slate-400 capitalize text-red-700'>{formik.errors.correo}</span>
                    </div> :

                    null

                  }

                  <input 
                    className='rounded-lg bg-slate-800 py-2 px-4 text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 placeholder:italic placeholder:text-slate-600 autofill:text-slate-600 autofill:bg-slate-800'
                    placeholder='juanrodriguez@mail.com'
                    type='text'
                    {...formik.getFieldProps('correo')}
                  />
                </div>
              </div>
              <div className='mt-4'>
                <Button>Registrar</Button>
              </div>
            </form>

          </Card>
          */}

          <Card className='mb-8'>
            <CardTitle>Registro - Formik Components</CardTitle>

            <Formik
              initialValues={{
                nombre: '',
                apellido: '',
                correo: '',
                mejorwhisky: '',
                radio: ''
              }}
              validate={validate}
              onSubmit={values => {
                console.log(values)
              }}
            >
              <Form onSubmit={formik.handleSubmit}>
                <div className='mb-6'>

                  <TextInput
                    name='nombre'
                    label='Nombre'  
                  />

                  <TextInput
                    name='apellido'
                    label='Apellido'  
                  />

                  <TextInput
                    name='correo'
                    label='Correo'  
                  />


                  <CheckboxInput name='erigey'>Eri gey</CheckboxInput>

                  <SelectInput label='Mejor Whisky del mundo' name='mejorwhisky' >
                    <option value=''>Seleccione el mejor whisky del mundo</option>
                    <option value='bluelabel'>Blue label de Jonny Walker</option>
                  </SelectInput>

                  <div>
                    <span className='text-slate-400' >"Blue label eh un elissir"</span>
                    <ErrorMessage name='radio'/>
                    <RadioInput name='radio' value='endesacuerdo' label='En Desacuerdo'/>
                    <RadioInput name='radio' value='medaigual' label='Me da Igual'/>
                    <RadioInput name='radio' value='completamentedecuerdo' label='Completamente Deacuerdo'/>
                  </div>

                </div>
                <div className='mt-4'>
                  <Button>Registrar</Button>
                </div>
              </Form>
            </Formik>


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
