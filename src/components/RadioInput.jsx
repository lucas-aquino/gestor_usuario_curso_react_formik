import { useField } from "formik";






export default function RadioInput({ label, ...props }) {
  const [ field ] = useField({ ...props, type: 'radio' })
  
  return(
    <div>
      <label className='text-slate-400'>
        <input className='mr-2' type='radio' { ...field } { ...props }/>
        { label }
      </label>
    </div>
  )
}




