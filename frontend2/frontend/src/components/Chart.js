import React from 'react';
import ChartRow from './ChartRow';


function Chart (props){
    let lastUsers1= props.users.length > 0 ? props.users[props.users.length - 1] : {first_name: '', last_name: '', email: '', user: ''}
    let lastUsers2= props.users.length > 0 ? props.users[props.users.length - 2] : {first_name: '', last_name: '', email: '', user: ''}
    
    let tableRowsData = [
        {
            Name: lastUsers1.first_name,
            LastName: lastUsers1.last_name,
            Email: lastUsers1.email,
            User: lastUsers1.user,
        },
        {
            Name: lastUsers2.first_name,
            LastName: lastUsers2.last_name,
            Email: lastUsers2.email,
            User: lastUsers2.user,
        },
        
    ]
  
  
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>LastName</th>
                                <th>Email</th>
                                <th>User</th>
                                
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;