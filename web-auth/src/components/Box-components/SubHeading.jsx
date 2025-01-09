export function SubHeading({label,placeholder,onChange}){
    return (
        <div>
             <div className="flex flex-coltext-zinc-800 p-2 text-2xl font-mono font-semibold">
                 {label}
             </div>
             <input type="text" onChange={onChange} placeholder={`${placeholder}`} className="w-full text-xl font-mono font-medium border-slate-700 rounded-3xl hover:border-neutral-800 bg-slate-200" />
        </div>
    ) 
}