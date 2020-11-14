import React from 'react'
import { CardDeck } from 'reactstrap'
import VideoListItem from "../components/VideoListItem"
const Videos = ({videos,mode="trending",nextPageToken}) => {
    
    return (
        <CardDeck style={{padding:"10px"}}>
            {videos.map(video=><VideoListItem key={video.etag} video={video} 
            mode={mode}/>)}
        </CardDeck>
    )
}

export default Videos

