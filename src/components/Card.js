import React from 'react'
import './style/card.css'
function Card(props) {
    return (
        <div> 
            <div  className='card'>
                <div style={{backgroundColor:'#bdc3c7'}}>
                    <img src={props.mission.links.mission_patch_small} width="150px" alt="patch"></img><br/>
                </div>
                <div style={{textAlign:'left',padding:'5px'}} >
                    <text style={{color:'#4a69bd'}}><strong>{props.mission.mission_name} #{props.mission.flight_number}</strong></text><br/>
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
