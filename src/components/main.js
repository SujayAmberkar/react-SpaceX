import React,{useState,useEffect} from 'react'
import Flexbox from 'flexbox-react';
import Filters from './Filters'
import Card from './card'
import axios from 'axios';
import './style/main.css';

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

        <div>
            <div className="container">
                <Flexbox className="filter-flex box" element="header">
                    <Filters missions={allMissions} setMission={setMission}/>
                </Flexbox>
                
                <Flexbox flexGrow={1} >
                    <div className="card-array box ">
                        {missions.map(mission=>{
                                return <Card mission={mission}/>
                            })}
                    </div>
                    
                </Flexbox>
                               
            </div>
            
        </div>
    )
}

export default Main


