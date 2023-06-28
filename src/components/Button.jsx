
export default function Button({ children, ...rest }){
  return (
    <button className='bg-cyan-500 w-full rounded-lg py-3 mb-3 text-slate-300 uppercase font-semibold tracking-widest' {...rest}>
      { children }
    </button>
  )
}