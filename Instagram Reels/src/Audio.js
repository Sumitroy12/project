import React, { Component } from 'react'
import {Howl} from 'howler';

const audioClips = [
    {sound: "http://pocketfm.s.llnwi.net/audio/old/5fb658028db763efdac2e13f7a90998ea0edc535-96.mp3", label:"Audio1"}

]
export default class Audio extends Component {
    soundPlay = (src) => {
        const sound = new Howl({
            src,
            html5: true
        })
        sound.play();
    }

    RenderButtonSound = () => {
        return audioClips.map((soundObj,index) => {
            return(
                <button key={index} onClick={() => this.soundPlay(soundObj.sound)}>{soundObj.label}
                </button>
            )
        })
    }
    render() {
        return (
            <div className = "App">
                <h2>Sounds</h2>
                {this.RenderButtonSound()}
            </div>
        )
    }
}
