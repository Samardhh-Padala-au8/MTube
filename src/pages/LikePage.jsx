import React, { Component } from 'react'
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { fetchLikedVideos } from '../redux/actions/videosActions'
import Videos from '../components/Videos'
import "../App.css"

class LikePage extends Component {


    componentDidMount() {
        this.props.fetchLikedVideos()
    }

    render() {
           console.log(this.props.videos)
        return !this.props.user ?
            <Redirect to="/login" /> : (

                this.props.videos ? <> <Videos videos={this.props.videos.items} mode="like" />
                </> : <div className="outerstrip">
                        <div className="innerstrip loading"></div>
                    </div>

            )
    }

}

const mapStateToProps = storeState => {
    return {
        user: storeState.userState.user,
        videos: storeState.videoState.videos
    }
}


export default connect(mapStateToProps, { fetchLikedVideos })(LikePage)
