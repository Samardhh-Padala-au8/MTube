import React, { Component } from 'react'
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { fetchPlaylists, createPlaylists } from '../redux/actions/playlistAction'
import "../App.css"
class PlaylistPage extends Component {

    state = {
        privacyStatus: "",
        title: "",
        description: ""
    }

    componentDidMount() {
        this.props.fetchPlaylists()
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const { privacyStatus, title, description } = this.state
        const playlist = {
            status: {
                privacyStatus
            },
            snippet: {
                description,
                title
            }
        }
        this.props.createPlaylists(playlist)
    }
    render() {
        if (!this.props.user) return <Redirect to="/login" />
        return (
            <div>
                {this.props.playlists? (this.props.playlists.items.map((playlist, index) => <div key={index}>{JSON.stringify(playlist)}</div>)) : (<div className="outerstrip">
                    <div className="innerstrip loading"></div>
                </div>)}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="title" placeholder="Enter your playlist title" value={this.state.title}
                        onChange={this.handleChange}
                    />
                    <input type="text" name="description" placeholder="Enter your playlist description" value={this.state.description}
                        onChange={this.handleChange}
                    />
                    <select name="privacyStatus" onChange={this.handleChange} value={this.state.privacyStatus}>
                        <option value="" disabled>
                            Choose a status
                        </option>
                        <option value="public">public</option>
                        <option value="unlisted">unlisted</option>
                        <option value="private">private</option>
                    </select>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = storeState => {
    return {
        user: storeState.userState.user,
        playlists: storeState.playlistState.playlists
    }
}



export default connect(mapStateToProps, { fetchPlaylists, createPlaylists })(PlaylistPage)
