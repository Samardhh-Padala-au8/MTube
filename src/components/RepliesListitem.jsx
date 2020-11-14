import React, { Component } from 'react'

 class RepliesListitem extends Component {
    render() {
          console.log(this.props.replies.snippet)
        return (
            <div style={{border:"1px solid black",margin:"20px" }}>
                <img src={this.props.replies.snippet.authorProfileImageUrl} style={{ borderRadius: "50%", width: 30, height: 30 }} alt="Author" />
                <p>User : {this.props.replies.snippet.authorDisplayName}</p>
                <p>Comment : {this.props.replies.snippet.textOriginal}</p>
               
            </div>
        )
    }
}

export default RepliesListitem
