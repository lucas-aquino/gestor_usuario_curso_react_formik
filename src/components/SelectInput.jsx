import { useField } from "formik"



export default function SelectInput({ label, ...props }){

  const [ field, meta ] = useField(props)

  const showError = meta.touched && meta.error

  return (
    <div>
      <label className='text-slate-400 mr-2'>{ label }</label>
      {
        showError ?
          <div className='flex flex-col content-center justify-center mb-5 mt-1 select-none border border-red-700 bg-red-500 rounded-lg pt-2'>
            <span className='ml-4 mb-2 text-sm font-bold capitalize text-red-700'>{ meta.error }</span>
          </div> 
        : null
      }
      <select { ...field } { ...props }/>
    </div>
  )
}

