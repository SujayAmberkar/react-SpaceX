import React,{useState,useEffect} from 'react'
import Flexbox from 'flexbox-react';
import Filters from './Filters'
import Card from './Card'
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

    // const applyFilter=(year)=>{
    //     console.log(props.missions);
    //     const res = props.missions.filter(mission=>
    //         mission.launch_year==year
    //     )
    // props.setMission(res)
    // }




    return (

        <div>
            <div className="container">
                <Flexbox className="filter-flex" element="header">
                    <Filters missions={allMissions} setMission={setMission}/>
                </Flexbox>
                
                <Flexbox flexGrow={1} className="card-flex">
                    <div className="card-array">
                        {missions.map(mission=>{
                                return <Card mission={mission}/>
                            })}
                    </div>
                    
                </Flexbox>
                            
            </div>
            <h1>Developed by: Sujay Amberkar</h1>
        </div>
    )
}

export default Main


