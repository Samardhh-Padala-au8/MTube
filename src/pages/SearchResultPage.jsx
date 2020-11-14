import React, { Component } from 'react'
import { connect } from "react-redux"
import { fetchSearchVideos } from '../redux/actions/videosActions'
import Videos from '../components/Videos'
import "../App.css"

class SearchResultPage extends Component {

    componentDidMount() {
        const searchQuery = this.props.match.params.searchQuery
        this.props.fetchSearchVideos(searchQuery)
    }
    componentDidUpdate({ match: { params: { searchQuery } } }) {
        if(searchQuery!==this.props.match.params.searchQuery){
            const searchQuery = this.props.match.params.searchQuery
        this.props.fetchSearchVideos(searchQuery)
        }
    }
    nexthandleChange=()=>{
        const searchQuery = this.props.match.params.searchQuery
        this.props.fetchSearchVideos(searchQuery,this.props.videos.nextPageToken)
    }
    prevhandleChange=()=>{
        const searchQuery = this.props.match.params.searchQuery
        this.props.fetchSearchVideos(searchQuery,this.props.videos.prevPageToken)
    }

    render() {
        console.log(this.props.videos)
        return (
            this.props.videos ? <><Videos videos={this.props.videos.items} mode="search" />
            {this.props.videos.prevPageToken!==undefined?<button onClick={this.prevhandleChange}>Previous Page</button>:""}
            <button onClick={this.nexthandleChange}>Next Page</button>
             </>: <div class="outerstrip">
                    <div class="innerstrip loading"></div>
                </div>
        )
    }

}

const mapStateToProps = storeState => {
    return {
        videos: storeState.videoState.videos
    }
}

export default connect(mapStateToProps, { fetchSearchVideos })(SearchResultPage)
