import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "username": ''
        }
    }
    onUserChange(event) {
        this.setState({ 'username': event.target.value });
        
    }

    onSubmitUser() {
        const {username} = this.state;
        localStorage.setItem('username', username);
    }
    render() {
        return(
            <div className="login">
                <h1>Profile</h1>
                <h4>User Name</h4>
                <input className="user" onChange={(event) => this.onUserChange(event)}></input>
                <button className="changeUser" onClick={() => this.onSubmitUser()}>Save</button>
            </div>
        )
    }
}
export default Profile;