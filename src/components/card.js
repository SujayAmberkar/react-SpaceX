import React from 'react'
import './card.css'
function Card(props) {
    return (
        <div> 
            <div style={{ backgroundColor:'#dfe6e9',width:'250px',height:'280px',margin:'10px', borderRadius:'5px'}} className='card'>
                <img src={props.mission.links.mission_patch_small} width="150px" alt="patch"></img><br/>
                <div style={{textAlign:'left',padding:'5px'}} >
                    <text><strong>{props.mission.mission_name}</strong></text><br/>
                    <text><strong>Mission Id: </strong>{props.mission.mission_id}</text><br/>
                    <text><strong>Launch Year: </strong>{props.mission.launch_year}</text><br/>
                    <text><strong>Successful Launch: </strong>{String(props.mission.launch_success)}</text><br/>
                    <text><strong>Successful Landing: </strong>{String(props.mission.launch_landing)}</text><br/>
                </div>
            </div>
            
        </div>
    )
}

export default Card
