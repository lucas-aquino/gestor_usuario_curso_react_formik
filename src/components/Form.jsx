import Button from './Button'
import Input from './Input'
import useForm from '../hooks/useForm'

export default function Form({ submit }) {

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
    <form onSubmit={handleSubmit}>
      <div className='mb-6'>
        <Input
          label='Nombre'
          name='nombre'
          placeholder='Juan'
          value={formulario.nombre}
          onChange={handleChange}
        />
        <Input
          label='Apellido'
          name='apellido'
          placeholder='Rodriguez'
          value={formulario.apellido}
          onChange={handleChange}
        />

        <Input
          label='Correo'
          name='correo'
          placeholder='juanrodriguez@mail.com'
          value={formulario.correo}
          onChange={handleChange}
        />
      </div>
      <div className='mt-4'>
        <Button>Registrar</Button>
      </div>
    </form>
  )
}