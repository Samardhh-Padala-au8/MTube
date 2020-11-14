import React from 'react'
import { Jumbotron} from "reactstrap"

const VideoPlayer = ({ video: { snippet, contentDetails, statistics, id } }) => {
    const {viewCount,likeCount,dislikeCount} = statistics
    return (
        <>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe
                    title="Video"
                    src={`https://www.youtube.com/embed/${id}`}
                    width="100px"
                    height="100px"
                    frameBorder="0"
                    allow="accelerometer;autoplay;encrypted-media;gyroscope;picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <Jumbotron>
                <h1 className="display-6" style={{fontSize:"20px"}}>{snippet.title}</h1>
                <p className="lead">{snippet.channelTitle}</p>
                <hr className="my-4" />
                <p>{snippet.description}</p>
                <p className="lead">
                    Views:{viewCount}
                </p>
                <p className="lead">
                    Likes:{likeCount}
                </p>
                <p className="lead">
                    Views:{dislikeCount}
                </p>
            </Jumbotron>
        </>
    )
}

export default VideoPlayer
