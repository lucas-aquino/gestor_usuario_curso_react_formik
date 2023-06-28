


export default function CardTitle({ children, className }) {

  const defaultClassStyles = [
    'mt-5',
    'mb-7',
    'ml-4',
    'text-3xl',
    'font-bold',
    'text-slate-200',
    'select-none'
  ]

  return (
    <div className={`${defaultClassStyles.join(' ')} ${className}`}>
      <h1>{ children }</h1>
    </div>
  )
}