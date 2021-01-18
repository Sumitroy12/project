import React from 'react'
import './VideoFooter.css'
import { Button, Avatar } from "@material-ui/core";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from "react-ticker"; 
import FavoriteIcon from '@material-ui/icons/Favorite';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import SendIcon from '@material-ui/icons/Send';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function VideoFooter({url, likes, shares, channel, avatarSrc, song}) {
    return (
        <div className='videoFooter'>
                <div className='videoFooter_text'>      <Avatar src={avatarSrc} />
                    <h3>
                        {channel} . <Button>Follow</Button>
                    </h3>
            </div>
            <div className="videoFooter_ticker">
               <MusicNoteIcon className="videoFooter_icon" /> 
               <Ticker mode="smooth">
                   {({ index }) =>(
                       <>
                        <h1>{song}</h1>
                        </>
                   )}
               </Ticker>
            </div>
            <div className="videoFooter_actions">
                <div className="videoFooter_actionsleft">
                    <FavoriteIcon fontSize="medium" />
                    <ModeCommentIcon fontSize="medium" />
                    <SendIcon fontSize="medium" />
                    <MoreVertIcon fontSize="medium" />
                </div>
                <div className="videoFooter_actionsRight">
                    <div className="videoFooter_stat">
                        <FavoriteIcon fontSize="small" />
                        <p>{likes}</p>
                    </div> 
                    <div className="videoFooter_stat">
                        <ModeCommentIcon fontSize="small" />
                        <p>{shares}</p>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default VideoFooter
