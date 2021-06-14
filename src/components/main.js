import React,{useState,useEffect} from 'react'
import Flexbox from 'flexbox-react';
import Filters from './Filters'
import Card from './card'
import axios from 'axios';


function Main() {
    const [allMissions,setAllMission] = useState([])
    const [missions, setMission] = useState([]);
    useEffect(() => {
        axios.get('https://api.spaceXdata.com/v3/launches?limit=100')
        .then((res)=>{
            
            setMission(res.data);
            setAllMission(res.data);
            console.log(res.data);
        })   
    },[])
    return (

        <div marginTop='0px' style={{backgroundColor:'#bdc3c7',backgroundAttachment:'fixed',height:"1000px"}}>
            <Flexbox flexDirection="row" minHeight="100%"  marginTop='0px'>
                <Flexbox element="header" width="200px" height="500px" margin="10px" padding="1px"  style={{backgroundColor:'#dfe6e9',borderRadius:'5px'}}>
                    <Filters missions={allMissions} setMission={setMission}/>
                </Flexbox>
                
                <Flexbox flexGrow={2} margin="10px" padding="0" height="600px" >
                <div style={{display:'flex', flexWrap:'wrap',width:'2000px',maxHeight:'1000px'}}>
                    {missions.map(mission=>{
                            return <Card mission={mission}/>
                        })}
                </div>
                    
                </Flexbox>

            </Flexbox>
            
        </div>
    )
}

export default Main


