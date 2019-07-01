import React from 'react';

class Rentals extends React.Component {
    state={
        rentals:[],
        rental: {
            _id:'',
            owner:'',
            pet:'',
            dateOut:''
        }
    };
    render(){
        return(
            <div>
                <h1>Login</h1>
                <ul>
                    {['users','from','db'].map((user,index)=>{
                        return <li key={index}>{user}</li>
                    })}
                </ul>
            </div>
        );
    }

}
export default Rentals