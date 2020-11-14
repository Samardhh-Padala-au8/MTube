import React, { Component } from 'react'
import { connect } from "react-redux"
import VideoPlayer from '../components/VideoPlayer'
import { fetchVideo, fetchComments } from '../redux/actions/currentVideoActions'
import Comments from '../components/Comments'
import "../App.css"

class VideoDetail extends Component {

    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId)
        this.props.fetchComments(this.props.match.params.videoId)
    }

    render() {
        console.log(this.props.currentVideo)
        return (
            <div>
                
                {this.props.currentVideo ? (<VideoPlayer video ={this.props.currentVideo.items[0]} />) : (<h1>Loading Video</h1>)}
                {this.props.comments? (<>
                {<Comments comments={this.props.comments.items}/>}
                </>) : (<div className="outerstrip">
                    <div className="innerstrip loading"></div>
                </div>)}
            </div>
        )
    }
}

const mapStateToProps = storeState => {
    return {
        currentVideo: storeState.currentVideoState.videos,
        comments: storeState.currentVideoState.comments
    }
}

export default connect(mapStateToProps, { fetchVideo, fetchComments })(VideoDetail)
