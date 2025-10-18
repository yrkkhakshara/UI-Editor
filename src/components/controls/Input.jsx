export function Input(props){
  return <input {...props} className={"w-full h-9 px-3 rounded-xl border border-base-200 bg-white outline-none focus:ring-2 focus:ring-accent/40 " + (props.className||"")} />
}
