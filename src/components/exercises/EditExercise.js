import React, { Component } from 'react';
import DatePicker from 'react-datepicker'; // gives access to the DatePicker component from the react-datepicker library
import "react-datepicker/dist/react-datepicker.css"; // imports the CSS for the DatePicker component
import axios from 'axios';

class EditExercise extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        };
    };

    //this method is a React lifecycle method and will automatically be called before anything on the page is rendered

    componentDidMount(){
        axios.get(`http://localhost:5000/exercises/${this.props.match.params.id}`)
            .then(response => {
                this.setState(
                    {
                        username: response.data.username,
                        description: response.data.description,
                        duration: response.data.duration,
                        date: new Date(response.data.date)
                    })
            })

        axios.get('http://localhost:5000/users/')
            .then(response => {
                if (response.data.length > 0){
                    this.setState({
                        users: response.data.map(user => user.username) // sets the user name being shown to the first entry in the DB
                    })
                }
            })
    };

    _onChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        });
    };

    
    _onChangeDescription = (event) => {
        this.setState({
            description: event.target.value
        });
    };
    
    _onChangeDuration = (event) => {
        this.setState({
            duration: event.target.value
        });
    };

    _onChangeDate = (date) => {
        this.setState({
            date: date
        });
    };

    _handleSubmit = (event) => {
        event.preventDefault();
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        };

        console.log( exercise );

        axios.post(`http://localhost:5000/exercises/update/${this.props.match.params.id}`, exercise)
            .then(result => console.log(result.data));

        window.location = '/';
    };
    
    render(){
        return (
            <div>
                <h3>Edit Exercise Log</h3>
                <form onSubmit={ this._handleSubmit }>
                    <div className="form-group">
                        <label>Username</label>
                        <select ref="userInput"
                        required
                        className="form-control"
                        value={ this.state.username }
                        onChange={ this._onChangeUsername }>
                            {
                                this.state.users.map(function(user) {
                                    return <option
                                        key={ user }
                                        value={ user }>{ user }
                                    </option>
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text" required value={ this.state.description } onChange={ this._onChangeDescription } className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Duration (in minutes): </label>
                        <input type="text" required value={ this.state.duration } onChange={ this._onChangeDuration } className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker selected={ this.state.date} onChange={ this._onChangeDate } />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}

export default EditExercise;