import React from 'react'
import './filter.css'
function Filters() {
    return (
        <div margin="1px">
            <strong>Filters</strong>
            <div className="years" style={{textAlign:'center'}}>
                <br/>
                <text>Launch Year</text>
                <hr style={{width:'130px', color:'#c8d6e5'}}/>
                <div className="wrapper" padding="1px" >
                    <button>2006</button>
                    <button>2007</button>
                    <button>2008</button>
                    <button>2009</button>
                    <button>2010</button>
                    <button>2011</button>
                    <button>2012</button>
                    <button>2013</button>
                    <button>2014</button>
                    <button>2015</button>
                    <button>2016</button>
                    <button>2017</button>
                    <button>2018</button>
                    <button>2019</button>
                    <button>2020</button>

                </div>
            </div>

            <div className="launch" style={{textAlign:'center'}}>
                <br/>
                <text>Successful Launch</text>
                <hr style={{width:'130px', color:'#c8d6e5'}}/>
                <div className="wrapper" padding="1px" >
                    <button>True</button>
                    <button>False</button>
                </div>
            </div>
            <div className="land" style={{textAlign:'center'}}>
                <br/>
                <text>Successful Landing</text>
                <hr style={{width:'130px', color:'#c8d6e5'}}/>
                <div className="wrapper" padding="1px" >
                    <button>True</button>
                    <button>False</button>
                </div>
            </div>
        </div>
    )
}

export default Filters
