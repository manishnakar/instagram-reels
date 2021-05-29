import React , {useRef, useEffect, useState} from 'react'
import './VideoCard.css'
import VideoHeader from './VideoHeader.js'
import VideoFooter from './VideoFooter.js'



function VideoCard({url, likes, channel, avatarSrc, shares, song}) {

    const [playVideo, setPlayVideo] = useState(false)
    const videoRef = useRef(null)

    const onVideoPress = () => {
        if(playVideo) {
           //stop     
            videoRef.current.pause()    
            setPlayVideo(false)
        }else{
            //Start
            videoRef.current.play()   
             setPlayVideo(true)   
        }
    }



    return (
        <div className='videoCard'>
            <VideoHeader />
            <video
            onClick={onVideoPress}
            ref={videoRef} 
            className="video__player"                                              
            src={url}
            loop            
            >        
        </video>           
        <VideoFooter
        channel={channel}
        likes={likes}
        shares={shares}
        avatarSrc={avatarSrc}
        song={song}
      />
        </div>

    )
}

export default VideoCard
