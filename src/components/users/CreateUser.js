import React, { Component } from 'react';
import axios from 'axios';

class CreateUser extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: ''
        };
    };

    _onChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        });
    };

    _handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            username: this.state.username,
        };

        console.log( user );

        axios.post('http://localhost:5000/users/add', user)
            .then(result => console.log(result.data));

        this.setState({ 
            username: '' 
        });
    };

    render(){
        return (
            <div>
                <form onSubmit={ this._handleSubmit }>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text" required value={ this.state.username } onChange={ this._onChangeUsername } className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary"  />
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateUser;