import React,{useState} from "react";
import AccordionItems from "./AccordionItems";
const AccordionMenu=({title,itemMenu,showListOfItems,toggleAccordion,name})=>{
  const handleClick=()=>{
    toggleAccordion();
  }
    return(
    <div style={{margin:"10px 0px",padding:'15px 10px',borderBottom:'16px solid #f1f1f6'}}>
      <div className="flex justify-between mb-5" onClick={()=> handleClick()}>
      <span className="font-bold">{title}(<span>{itemMenu?.length}</span>)</span>
      {showListOfItems?(
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
      ):(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 inline-block">
         <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
      )
    }
      </div>
      {(showListOfItems) && <AccordionItems items={itemMenu} name={name}/>}
    </div>
    )
}
export default AccordionMenu;