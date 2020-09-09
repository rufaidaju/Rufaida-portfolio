import React from "react";


function InformationContent(props){
return(
            
<div className="informations-item">
    <div className="icon">
        <img src={props.content.imgUrl} alt={props.content.name +'logo'}/>
    </div>
    <p>{props.content.name}</p>
    <p>{props.content.description}</p>
</div>          
)
}
export default InformationContent;
