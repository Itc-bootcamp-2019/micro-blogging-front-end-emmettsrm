import React from 'react'

class CreateTweet extends React.Component {
    render(){
        return (
            <div className="createTweet">
                <textarea className="writeTweet" type="text" placeholder="What you have in mind..."></textarea>
                <button>Tweet</button>
            </div>
        )
    }
}

export default CreateTweet