import React, {useState, useRef ,useEffect} from 'react';
import './VideoCard.css';
//import ReactPlayer from 'react-player';
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';


function VideoCard({url, likes, shares, channel, avatarSrc, song}) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if (isVideoPlaying) {
            //stop
            videoRef.current.pause();
            setIsVideoPlaying(false)
        } else{
            //play
            videoRef.current.play();
            setIsVideoPlaying(true)
        }

    };

    useEffect(() => {
        const scroll = document.getElementById("video-container");

        if (scroll) {
            scroll.addEventListener("scroll", () =>{
                videoRef.current.pause();
            });
        }
    },[]);

    return (
        <div className="videoCard">
            <VideoHeader />
            <video
                ref={videoRef}
                onClick={onVideoPress}
                className="video_player"
                src={url}
                alt='reel video'
                loop
            />
            <VideoFooter 
                channel={channel}
                avatarSrc={avatarSrc}
                song={song}
                likes={likes}
                shares={shares}
            />
        </div>
    )
}

export default VideoCard
