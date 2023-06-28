import { useState } from 'react'

function useForm(inicial) {
  const [formulario, setFormulario] = useState(inicial)
  
  const handleChange = ({ target }) => {
    setFormulario({
      ...formulario,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value
    })
  }  

  const reset = () => {
    setFormulario(inicial)
  }

  return [formulario, handleChange, reset]
}

export default useForm