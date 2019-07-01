import React from 'react'
import {Link} from "react-router-dom";
import path from "../paths";

class Employees extends  React.Component {
    state = {
        employees:[],
        employee:{
            _id: '',
            name:'',
            role: {
                _id:'',
                title:'',
                qualificationRate:''
            },
            phone:''
        }
    };
    componentDidMount() {
        this.getEmployees();
    }
    getEmployees = () => {
        fetch('http://localhost:5000/api/employees')
            .then(res => res.json())
            .then(res => this.setState({employees: res}))
            .catch((e) => console.log(e));

    };
    renderEmployees = ({_id, name, role, phone}) =>
        <tr key={_id}>
            <td>{name}</td>
            <td>{role.title}</td>
            <td>{phone}</td>
            <td>
                <Link to={path.newEmployee}>
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
        const {employees} = this.state;
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <h2>Employees</h2>
                            <div className='table-responsive'>
                                <table className='table  table-bordered table-hover table-sm'>
                                    <caption>List of employees</caption>
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Role</th>
                                        <th> Phone</th>
                                        <th>Select</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.employees.length === 0 && <tr>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>}
                                    {employees.map(this.renderEmployees)}
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
    export default Employees;