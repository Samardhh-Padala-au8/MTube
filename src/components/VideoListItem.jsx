import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { Link } from "react-router-dom"
const limitDescriptionContent = (description, letterCount) => {
    return description.length <= letterCount ? description : `${description.slice(0, letterCount)}...`
}

const VideoListItem = ({ video: { snippet, ...restProps }, mode }) => {

   
    
        const videoID = { ...snippet.resourceId }
        console.log(videoID.videoId)
    
    return (
        <Card style={{ flexBasis: "250px", margin: "10px" }}>
            <Link to={`/videos/${mode === "search" ? restProps.id.videoId : (mode === "like" ? videoID.videoId : restProps.id)}`} style={{ color: "inherit", textDecoration: "none" }} >
                <CardImg top width="100%" src={snippet.thumbnails.high.url} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{snippet.title}</CardTitle>
                    <CardSubtitle>{snippet.channelTitle}</CardSubtitle>
                    <CardText>{limitDescriptionContent(snippet.description, 100)}</CardText>
                </CardBody>
            </Link>
        </Card>
    )
}

export default VideoListItem
