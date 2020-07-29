import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

export default class MusicController extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          total: 0,
          current: 0,
          play: 'Play',
          icon: <i className='fa fa-play' />
        }
    }

  playPause = () => {
    this.setState({
      play: this.state.play == 'Play' ? 'Pause' : 'Play',
      icon: this.state.play == 'Play' ? <i className='fa fa-pause' /> : <i className='fa fa-play' />
    });
    if(this.state.play == 'Play') {
      this.audio.play();
      this.startTimer()
    } else {
      this.audio.pause();
      this.stopTimer()
    }
  }

  startTimer = () => {
    this.timer = setInterval(() => {
      this.setState({
        current: this.state.current + 1
      });
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.timer);
  };

  reset = () => {
    if(this.audio.paused) {
      this.audio.currentTime = 0
      this.setState({ current: 0 })
    }
  }

  increase30 = () => {
    this.audio.currentTime += 30
    this.setState({ current: this.state.current + 30 })
  }

  decrease30 = () => {
    if(this.audio.currentTime > 30) {
      this.audio.currentTime -= 30
      this.setState({ current: this.state.current - 30 })
    } else {
      this.audio.currentTime = 0
      this.setState({ current: 0 })
    }
  }

  componentDidMount = () => {
    this.audio = this.props.audio
    this.audio.loop = true
    this.audio.autoplay = true
    // this.playPause()
    this.setState({ 
      total_time: this.audio.duration,
      play: this.audio.paused ? 'Play' : 'Pause',
      icon: this.audio.paused ? <i className='fa fa-play' /> : <i className='fa fa-pause' />
    })
  }

  render() {
    return (
      <div id='music_controller'>
        <Fade top duration={1000} delay={250} distance="30px">
          <a onClick={() => this.decrease30()} ><i className='fa fa-backward' /></a>
        </Fade>
        <Fade top duration={1000} delay={500} distance="30px">
          <a onClick={() => this.playPause()} >{this.state.icon}</a>
        </Fade>
        <Fade top duration={1000} delay={750} distance="30px">
          <a onClick={() => this.increase30()} ><i className='fa fa-forward' /></a>
        </Fade>
        <Fade top duration={1000} delay={750} distance="30px">
          <a href='http://musicforprogramming.net/?one' rel="noopener noreferrer" target="_blank" ><i className='fa fa-question-circle' /></a>
        </Fade>
       
        {/* <div style={{textAlign: 'right'}}>
          <a><i className={`fa fa-times-circle`} /></a>
        </div>
        <div>
          <span> 
            {parseInt(this.state.current / 3600) < 10 ? '0' + parseInt(this.state.current / 3600) : parseInt(this.state.current / 3600)}:
            {parseInt(this.state.current / 60) % 60  < 10 ? '0' + parseInt(this.state.current / 60) % 60 : parseInt(this.state.current / 60) % 60}:
            {this.state.current % 60 < 10 ? '0' + this.state.current % 60 : this.state.current % 60}
            /
            {parseInt(this.state.total / 60) < 10 ? '0' + parseInt(this.state.total / 60) : parseInt(this.state.total / 60)}:
            {(parseInt(this.state.total / 60)) % 60  < 10 ? '0' + (parseInt(this.state.total / 60)) % 60 : (parseInt(this.state.total / 60)) % 60}:
            {this.state.total % 60 < 10 ? '0' + this.state.total % 60 : this.state.total % 60} |</span>
          <a onClick={() => this.playPause()} >{this.state.play}</a>
          <a onClick={() => this.reset()}>Reset</a>
          <a onClick={() => this.increase30()}>+30</a>
          <a onClick={() => this.decrease30()}>-30</a>
        </div>
        <div>
          Reference to the audio: <a href={this.state.audio_url} rel="noopener noreferrer" target="_blank">{this.audio ? this.state.audio_url : 'Link not available'}</a>
        </div> */}
      </div>
    )
  }
}