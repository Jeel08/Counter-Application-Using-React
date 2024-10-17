import { useState } from "react";
import Items from "./items";
import Plus from "./images/plus.png";
import Minus from "./images/delete.png";
import Delete from "./images/icon (2).png";
import Button from 'react-bootstrap/Button';

const Counter = () => {
    const [origAray,setOrigArray] = useState([
        {id:1, count:0,index:0},
        {id:2, count:0,index:0},
        {id:3, count:0,index:0},
        {id:4, count:0,index:0}
    ]);
    const [aray,setAray] = useState(origAray);
    const [items,setItems] = useState(0)

    const handleIncrement = (id)=> {
        const updatedArray = aray.map((item) => {
            if (item.id == id)
                {
                    if(item.count == 0)
                    {
                        const previtem = items + 1;
                        setItems(previtem)
                    }
                    return { ...item, count: item.count + 1 };
                }
            return item;
        },[]);
        setAray(updatedArray);
    }
    
  
    const handleDecrement = (id)=> {
        const updatedArray = aray.map((ar)=>{
            if(ar.id == id)
                return {count:(ar.count > 0 ? ar.count -=1 : ar.count = 0 ),...ar}
            return ar;
        });
        setAray(updatedArray);
    }

    const handleDelete = (id) => {
        const filterItem = aray.filter((ar) => ar.id !== id);
        const sameItem = aray.filter((ar) => (ar.id == id && ar.count > 0));
        setItems(items - sameItem.length)
        setAray(filterItem);
    }

    const handleReset = () => {
        setAray(origAray);
        setItems(0);
    }

    const handleResetCount = () => {
        const newArray = aray.map((ar)=>{
            if(ar.count >= 0) {
                return {...ar,count : 0}
            }
        });
        setItems(0)
        setAray(newArray);
    }

    const Style = {height:"2rem",width:"2rem"}
    return (
        <>
            <div>
                <div style={{marginBottom:"2rem"}}>
                    <Items items = {items} aray={aray} handleReset={handleReset} handleResetCount={handleResetCount}></Items>
                </div>

                <div style={{display:"flex",gap:"1rem",flexDirection:"column",marginLeft:"30%"}}>

                {aray.map((ar)=>{
                    return (
                        <>
                        <div style={{display:"flex",gap:"1rem"}}>
                         

                            <p className="btn btn-primary">{ar.count == 0 ? "Zero" : ar.count}</p>

                            <div>
                                <img
                                src={Plus}
                                style={Style}
                                onClick={()=>handleIncrement(ar.id)}
                                />

                                <img src={Minus} alt="Minus" 
                                style={Style}
                                onClick={()=>handleDecrement(ar.id)}
                                />

                                <img src={Delete} alt="Delete" 
                                onClick={()=>handleDelete(ar.id)}
                                style={Style}/>
                            </div>
                        </div>
                        </>
                    )
                })
                }
                </div>
            </div>


        </>
    )
}

export default Counter;