import React, {Component} from 'react';

class FinalCard extends Component{
render(){
	const  moviesName = this.props.moviesName;
 	const users = this.props.users ;
  	const fevMovUser = this.props.fevMovUser;
  
return(
<div>
  <h2>{moviesName.name}</h2> <p>Liked By:</p>    
  
  {!fevMovUser || fevMovUser.length === 0 ? (
          <p>None of the current users liked this movie.</p>
        ) : (
          <ul>
            {fevMovUser.map(userId => {
                return (
                  <li key={userId}>
                    <p>{users[userId].name}</p>
                  </li>
                );
              })}
          </ul>
        )}
  
  </div>
)}
}




export default FinalCard; 