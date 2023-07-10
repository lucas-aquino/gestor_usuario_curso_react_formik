
import { useField } from "formik";

export default function TextInput({ label, ...props }) {

  const [ field, meta ] = useField(props)

  const showError = meta.touched && meta.error

  const styleInput = [
    'rounded-lg', 
    'bg-slate-800', 
    'py-2', 
    'px-4', 
    'text-slate-100', 
    'focus:outline-none', 
    'focus:ring-2', 
    'placeholder:italic', 
    'placeholder:text-slate-600', 
    'autofill:text-slate-600', 
    'autofill:bg-slate-800'
  ]

  return (
  <div className='flex flex-col mb-5 mt-1 select-none'>
    
    <label className='ml-4 mb-2 text-sm font-bold text-slate-400'>{ label }</label>
    
    {
      showError ?
        <div className='flex flex-col content-center justify-center mb-5 mt-1 select-none border border-red-700 bg-red-500 rounded-lg pt-2'>
          <span className='ml-4 mb-2 text-sm font-bold capitalize text-red-700'>{ meta.error }</span>
        </div> 
      : null
    }

    <input 
      className={`${styleInput.join(' ')} ${showError ? 'focus:ring-red-700 border-2 border-red-700' : 'focus:ring-slate-400'}`} 
      { ...field }
      { ...props }
    />
  </div>
  )
}