import React, { Component } from 'react'
import {Collapse,Button} from "reactstrap"
import Replies from "./Replies"

class CommentListitem extends Component{
    state = {
        isOpen:false
    }
    handlebtn =()=>{
        this.setState({isOpen:!this.state.isOpen})
    }
    render(){
        const {
            snippet : {topLevelComment},replies
        }=this.props.comment
        console.log(replies)
        return (
            <div style={{border:"3px solid black",margin:"20px" }}>
                <img src={topLevelComment.snippet.authorProfileImageUrl} style={{ borderRadius: "50%", width: 30, height: 30 }} alt="Author" />
                <p>User : {topLevelComment.snippet.authorDisplayName}</p>
                <p>Comment : {topLevelComment.snippet.textOriginal}</p>
               
                {replies!==undefined?(<>
                    <Button onClick={this.handlebtn}>{this.state.isOpen?"Close Replies":"Show Replies"}</Button>
                <Collapse isOpen={this.state.isOpen}>
                    <Replies replies={replies}/>
                </Collapse></>):null}
            </div>
        )
    }
}

export default CommentListitem