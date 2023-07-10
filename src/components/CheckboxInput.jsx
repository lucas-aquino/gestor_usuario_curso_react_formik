import { useField } from "formik";


export default function CheckboxInput({ label, children, ...props}) {

  const [ field, meta ] = useField({ ...props, type: 'checkbox' })

  const showError = meta.touched && meta.error

  return(
    <div className='flex flex-col mb-5 mt-1 select-none'>

      {
        showError ?
          <div className='flex flex-col content-center justify-center mb-5 mt-1 select-none border border-red-700 bg-red-500 rounded-lg pt-2'>
            <span className='ml-4 mb-2 text-sm font-bold capitalize text-red-700'>{ meta.error }</span>
          </div> 
        : null
      }
    
      <label className='text-slate-400'>
        { children }
        <input className='mx-2' type='checkbox' { ...field } { ...props }/>
      </label>
    </div>
  )
}



