
import { useField } from "formik";

export default function TextInput({ label, ...props }) {

  const [ flied, meta ] = useField()

  return (
  <div className='flex flex-col mb-5 mt-1 select-none'>
    <label className='ml-4 mb-2 text-sm font-bold text-slate-400'>Apellido</label>

    <ErrorMessage 
      className='text-red-700'
      name='apellido'
    />

    <Field 
      className='rounded-lg bg-slate-800 py-2 px-4 text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 placeholder:italic placeholder:text-slate-600 autofill:text-slate-600 autofill:bg-slate-800'
      placeholder='Rodriguez'
      name='apellido' 
      type='text'
    />
  </div>
  )
}