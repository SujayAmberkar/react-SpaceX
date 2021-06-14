import React from 'react'
import Flexbox from 'flexbox-react';
import Filters from './Filters'
import Card from './card'

function Main() {
    return (
        <div marginTop='0px'>
            <Flexbox flexDirection="row" minHeight="80vh" style={{backgroundColor:'#bdc3c7'}} marginTop='0px'>
                <Flexbox element="header" width="200px" height="500px" margin="10px" padding="1px"  style={{backgroundColor:'#dfe6e9',borderRadius:'5px'}}>
                    <div><Filters/></div>
                </Flexbox>
                
                <Flexbox flexGrow={1} margin="10px" padding="1px" height="600px" style={{backgroundColor:'#dfe6e9'}}>
                    <Card/>
                </Flexbox>

            </Flexbox>
            
        </div>
    )
}

export default Main


