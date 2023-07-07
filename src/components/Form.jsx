import Button from './Button'
import Input from './Input'
import useForm from '../hooks/useForm'
import { useFormik } from 'formik'

export default function Form({ submit }) {

  const formik = useFormik({
    initialValues: {
      nombre: '',
      apellido: '',
      correo: ''
    },
    validate: values => {
      const errors = {}
      
      errors.nombre = 'requerido'
      
      return errors
    },
    onSubmit: values => {
      e.preventDefault()
      submit(formulario)
      reset()
    }
  })
  

  const [formulario, handleChange, reset] = useForm({
    nombre: '',
    apellido: '',
    correo: ''
  })

  const handleSubmit = e => {
    e.preventDefault()
    submit(formulario)
    reset()
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='mb-6'>



      {formik.errors.nombre ? 

        <div className='flex flex-col mb-5 mt-1 select-none'>
          <span className='ml-4 mb-2 text-sm font-bold text-slate-400'>{formik.errors.nombre}</span>
        </div> :
         
        null
      
      }
        <div className='flex flex-col mb-5 mt-1 select-none'>
          <label className='ml-4 mb-2 text-sm font-bold text-slate-400'>Nombre</label>
          <input 
            className='rounded-lg bg-slate-800 py-2 px-4 text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 placeholder:italic placeholder:text-slate-600 autofill:text-slate-600 autofill:bg-slate-800' 
            name='nombre'
            placeholder='Juan'
            value={formik.nombre}
            onChange={formik.handleChange}
          />
        </div>

        <div className='flex flex-col mb-5 mt-1 select-none'>
          <label className='ml-4 mb-2 text-sm font-bold text-slate-400'>Apellido</label>
          <input 
            className='rounded-lg bg-slate-800 py-2 px-4 text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 placeholder:italic placeholder:text-slate-600 autofill:text-slate-600 autofill:bg-slate-800'
            name='apellido'
            placeholder='Rodriguez'
            value={formik.apellido}
            onChange={formik.handleChange}
          />
        </div>

        <div className='flex flex-col mb-5 mt-1 select-none'>
          <label className='ml-4 mb-2 text-sm font-bold text-slate-400'>Correo</label>
          <input 
            className='rounded-lg bg-slate-800 py-2 px-4 text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 placeholder:italic placeholder:text-slate-600 autofill:text-slate-600 autofill:bg-slate-800'
            name='correo'
            placeholder='juanrodriguez@mail.com'
            value={formik.correo}
            onChange={formik.handleChange}
          />
        </div>
      </div>
      <div className='mt-4'>
        <Button type="submit">Registrar</Button>
      </div>
    </form>
  )
}