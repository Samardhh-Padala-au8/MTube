import React, { Component } from 'react'
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { fetchTrendingVideos } from '../redux/actions/videosActions'
import Videos from '../components/Videos'
import "../App.css"

class HomePage extends Component {
    state = {
        nextPageTokenstate: ""
    }

    componentDidMount() {
        this.props.fetchTrendingVideos()

    }
    
    nexthandleChange = () => {
        this.props.fetchTrendingVideos(this.props.videos.nextPageToken)
    }
    prevhandleChange = () => {
        this.props.fetchTrendingVideos(this.props.videos.prevPageToken)
    }
    render() {
        console.log(this.props.user)
        return !this.props.user ? <Redirect to="/login" /> : (
            this.props.videos ? <> <Videos videos={this.props.videos.items} nextPageToken={this.props.videos.nextPageToken} />
                {this.props.videos.prevPageToken !== undefined ? <button onClick={this.prevhandleChange}>Previous Page</button> : ""}
                <button onClick={this.nexthandleChange}>Nextpage</button>
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
export default connect(mapStateToProps, { fetchTrendingVideos })(HomePage)
