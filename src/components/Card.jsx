
export default function Card({ children, className}){

  const defaultClassStyles = [
    'bg-slate-900',
    'rounded-lg',
    'px-8',
    'py-6',
    'drop-shadow-2xl',
    'border',
    'border-slate-800',
    'antialiased',
  ]

  return (
    <div className={`${defaultClassStyles.join(' ')} ${className}`}>
      { children }
    </div>
  )
}
