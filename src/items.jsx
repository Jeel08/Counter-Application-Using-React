import { useEffect, useState } from "react"

const Items = ({items,aray,handleReset,handleResetCount}) =>{

    const [isDisable,setIsDisable] = useState(true);

    const handleResetForm = () => {
        handleReset()
    }

    const handleResetCouter = () => {
        handleResetCount();
    }

   useEffect(()=>{
    if(aray.length >0) 
        setIsDisable(true)
    else
    setIsDisable(false)
   },[aray])
        
    return (
        <div style={{gap:"2rem",display:"flex"}}>
              <p className="btn btn-info">{items < 5 ? items : aray.length} Items</p>
               <button onClick={handleResetCouter} className="btn btn-secondary" style={{cursor:"pointer",height:"2.5rem"}}>Counter Reset</button>
               <button disabled={isDisable} className="btn btn-success" onClick={handleResetForm} style={{cursor:"pointer",height:"2.5rem"}}>Form Reset</button>
        </div>
    )
}
export default Items