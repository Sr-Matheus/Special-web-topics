import { useState } from 'react';

function MyHookComponent() 
{
    let [count, setCount] = useState(0);

    function zerar()
    {
        if (count != 0) 
        {
            setCount(0)
        }
    }
    
    return(
        <>
            <h2>Resultado: {count}</h2>
            <button onClick={()=>setCount(count-1)} >Decrementar</button>
            <button onClick={(e)=>zerar(e.target.value)} >Zerar</button>
            <button onClick={()=>setCount(count+1)} >Incrementar</button>
        </>
    )
}

export default MyHookComponent