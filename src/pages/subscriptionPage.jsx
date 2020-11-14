import React, { Component } from 'react'
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import "../App.css"
import { fetchSubscription } from '../redux/actions/subscriptionAction'
class PlaylistPage extends Component {

    componentDidMount() {
        this.props.fetchSubscription()
    }

    render() {
        if (!this.props.user) return <Redirect to="/login" />
        return (
            <div>
                {this.props.subscriptions ? (this.props.subscriptions.items.map((playlist) => <div key={playlist.etag} style={{margin:"10px",boxShadow:"2px 2px 2px 2px #888",padding:"20px"}}><div>
                    <img src={playlist.snippet.thumbnails.medium.url} alt="Channel Pic" style={{ width: 150, height: 150, borderRadius: "50%" }}/>
                    <div style={{textAlign:"justify"}}>
                    <p><span style={{fontWeight:"bold"}}>Channel Name : </span>{playlist.snippet.title}</p>
                    <p><span style={{fontWeight:"bold"}}>Channel Description : </span>{playlist.snippet.description}</p>
                    </div>
                </div></div>)) : (<div className="outerstrip">
                    <div className="innerstrip loading"></div>
                </div>)}
            </div>
        )
    }
}

const mapStateToProps = storeState => {
    return {
        user: storeState.userState.user,
        subscriptions: storeState.subscriptionState.subscriptions
    }
}



export default connect(mapStateToProps, { fetchSubscription })(PlaylistPage)
