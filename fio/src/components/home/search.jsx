import { useRef, useState } from "react"

export default function Search(){
    const [data, setData] = useState('')
    const inputRef = useRef()

    return(
        <div>
<input type="text" name="search" placeholder="    search here..." className="rounded-2xl w-96 h-8 " ref={inputRef} value={inputValue}/>

        </div>
        
    )
}