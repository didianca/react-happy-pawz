import React from 'react'
import {Link} from 'react-router-dom';
import path from '../paths';

class Rooms extends React.Component {
    state = {
        rooms: [],
        room: {
            _id: '',
            numberOfAvailable: '',
            name: '',
            outdoorAccess: '',
            size: '',
            level: '',
            caretakerId: '',
            maidId: '',
        }
    };

    componentDidMount() {
        this.getRooms();
    }
    //TODO:this  ↓
    selectRoomForRent(){
        const {room}= this.state;
      const headers = new Headers();
      headers.append('Content-Type','application/json');
      const options ={
          method:'POST',
          headers,
          body: JSON.stringify(room._id)
      }
    };
    getRooms = () => {
        fetch('http://localhost:5000/api/rooms')
            .then(res => res.json())
            .then(res => this.setState({rooms: res}))
            .catch((e) => console.log(e));

    };

    renderRooms = ({_id, name, numberOfAvailable, outdoorAccess, size, level}) =>
        <tr key={_id}>
            <td>{name}</td>
            <td>{numberOfAvailable}</td>
            <td>{(outdoorAccess === true) ? 'YES' : 'NO'}</td>
            <td>{size}</td>
            <td>{level}</td>
            <td>
                <Link to={path.newRent}>
                    <button className='btn btn-outline-info'>
                        <ion-icon name="add-circle-outline"></ion-icon>
                    </button>
                </Link>
                <button className='btn btn-outline-info'>
                    <ion-icon name="create" ></ion-icon>
                </button>
                <button className='btn btn-outline-info'>
                    <ion-icon name="trash"></ion-icon>
                </button>
            </td>
        </tr>
    ;

    render() {
        const {rooms} = this.state;
        return (
            <div>

                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                                <h2>Rooms</h2>
                            <div className='table-responsive'>
                                <table className='table  table-bordered table-hover table-sm'>
                                    <caption>List of rooms</caption>
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Available</th>
                                        <th>Outdoor Access</th>
                                        <th>Size</th>
                                        <th>Level</th>
                                        <th>Select</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.rooms.length === 0 && <tr>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <th>-</th>
                                    </tr>}
                                    {rooms.map(this.renderRooms)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default Rooms;