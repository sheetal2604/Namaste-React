import {useState} from "react";

const User=(props)=>{
    const[count]=useState(0)
   const {name}=props

    return <div className="user-card">
        <h2>{name}</h2>
        <h3>{count}</h3>
    </div>
}

export default User;