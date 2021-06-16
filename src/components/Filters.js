import React,{useState,useEffect} from 'react'
import './style/filter.css'
import axios from 'axios';
function Filters(props) {

    const [year, setyear] = useState()

    const applyFilter=(year)=>{
        setyear(year)
        console.log(props.missions);
        const res = props.missions.filter(mission=>
            mission.launch_year==year
        )
        props.setMission(res)
    }

    const applyLaunchFilter=(bool)=>{
        axios.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${bool}`)
        .then((res)=>{
            if(year){
                const result = res.data.filter(mission=>
                    mission.launch_year==year
                )
                props.setMission(result)
                return
            }
            props.setMission(res.data)
            console.log(res.data);
        })
    }
    
    const applyLandFilter=(bool)=>{
        axios.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=${bool}`)
        .then((res)=>{
            props.setMission(res.data)
            console.log(res.data);
        })
    }

    return (
        <div margin="1px">
            <strong>Filters</strong>
            <div className="years">
                <br/>
                <text>Launch Year</text>
                <hr style={{width:'130px', color:'#c8d6e5'}}/>
                <div className="wrapper" padding="1px" >
                    <button onClick={()=>{applyFilter(2006)}}>2006</button>
                    <button onClick={()=>{applyFilter(2007)}}>2007</button>
                    <button onClick={()=>{applyFilter(2008)}}>2008</button>
                    <button onClick={()=>{applyFilter(2009)}}>2009</button>
                    <button onClick={()=>{applyFilter(2010)}}>2010</button>
                    <button onClick={()=>{applyFilter(2011)}}>2011</button>
                    <button onClick={()=>{applyFilter(2012)}}>2012</button>
                    <button onClick={()=>{applyFilter(2013)}}>2013</button>
                    <button onClick={()=>{applyFilter(2014)}}>2014</button>
                    <button onClick={()=>{applyFilter(2015)}}>2015</button>
                    <button onClick={()=>{applyFilter(2016)}}>2016</button>
                    <button onClick={()=>{applyFilter(2017)}}>2017</button>
                    <button onClick={()=>{applyFilter(2018)}}>2018</button>
                    <button onClick={()=>{applyFilter(2019)}}>2019</button>
                    <button onClick={()=>{applyFilter(2020)}}>2020</button>

                </div>
            </div>

            <div className="launch" style={{textAlign:'center'}}>
                <br/>
                <text>Successful Launch</text>
                <hr style={{width:'130px', color:'#c8d6e5'}}/>
                <div className="wrapper" padding="1px" >
                    <button onClick={()=>{applyLaunchFilter(true)}}>True</button>
                    <button onClick={()=>{applyLaunchFilter(false)}}>False</button>
                </div>
            </div>
            <div className="land" style={{textAlign:'center'}}>
                <br/>
                <text>Successful Landing</text>
                <hr style={{width:'130px', color:'#c8d6e5'}}/>
                <div className="wrapper" padding="1px" >
                    <button onClick={()=>{applyLandFilter(true)}}>True</button>
                    <button onClick={()=>{applyLandFilter(false)}}>False</button>
                </div>
            </div>
        </div>
    )
}

export default Filters
