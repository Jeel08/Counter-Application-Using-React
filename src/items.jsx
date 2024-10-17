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
               <p onClick={handleResetCouter} className="btn btn-secondary" style={{cursor:"pointer"}}>Counter Reset</p>
               <p disabled={isDisable} className="btn btn-success" onClick={handleResetForm} style={{cursor:"pointer"}}>Form Reset</p>
        </div>
    )
}
export default Items