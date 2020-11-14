import React, { Component } from 'react'
import {withRouter} from "react-router-dom"

class Search extends Component {

    state = {
        searchQuery: ""
    }
    handleChange=(event)=>{
        this.setState({searchQuery:event.target.value})
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        this.props.history.push(`/search/${this.state.searchQuery}`)
        this.setState({searchQuery:""})
    }
    render() {
        return (
            <form className="input-group mb-3" onSubmit={this.handleSubmit}
            style={{margin:"10px auto",width:"60%"}}
            >
                <input type="text" className="form-control" placeholder="Search the Video" aria-label="Recipient's username" aria-describedby="button-addon2"
                    name="searchQuery"
                    onChange={this.handleChange}
                    value={this.state.searchQuery}
                />
                <div className="input-group-append">
                    <input className="btn btn-outline-secondary" type="submit" value="Search" id="button-addon2" />
                </div>
            </form>
        )
    }
}

export default withRouter(Search)
