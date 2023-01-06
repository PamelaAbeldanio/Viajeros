import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.Name}</td>
                    <td>{props.LastName}</td>
                    <td>{props.Email}</td>
                    <td>{props.User}</td>
                </tr>
            )
    }
    
        

export default ChartRow;