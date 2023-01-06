import React, {useEffect, useState} from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRowMovies from './ContentRowMovies';
import Chart from './Chart';

function ContentRowTop(props){
	const [users, setUsers] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3001/api/users`)
            .then(response => response.json())
            .then(data => {
                const users = data.data
                setUsers(users)

				users.map(user => ({
					...user,
				})
				)})
    }, [])

    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowMovies 
						destinys={props.destinys}
                        categorys={props.categorys}
						users = {users}
					/>
					<ContentRowCenter 
						destinys={props.destinys}
                        categorys={props.categorys}
						total={props.total}
					/>
					<Chart 
						users = {users}
						/>
	                  
				</div>
				{/*<!--End Content Row Top-->*/}
              
        </React.Fragment>
    )
}
export default ContentRowTop;