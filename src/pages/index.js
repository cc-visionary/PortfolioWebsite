import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
// import Title from '../components/Title/Title';
import Loading from '../components/Loading/Loading'
import audio_file from '../audios/music_for_programming_1-datassette.mp3'
import MusicController from '../components/MusicController/MusicController';

export default class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
    }
  }

  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  componentDidMount = () => {
    this.audio = new Audio(audio_file)
    this.sleep(6000).then(() => {
      this.setState({loading: false})
    })
  }

  render() {
    const { title, lang, description, theme_color } = headData;

    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <html lang={lang} />
          <meta name="description" content={description} />
          <meta name="theme-color" content={theme_color} />
          <meta property="og:title" content={title} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://christopherlim.surge.sh" />
          <meta property="og:image" content="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.15752-9/116278942_1508554479328818_2275541961838018745_n.png?_nc_cat=101&_nc_sid=b96e70&_nc_eui2=AeH3upS2FZtTG9wpWv3UBChWQkSj0YSwh5JCRKPRhLCHkjuFONX3ogu_AZrvZToEDQ_FMGbUqG5LJyXSpMEexymJ&_nc_ohc=rs5XO0wN2QgAX8fW9Xz&_nc_ht=scontent-hkg4-1.xx&oh=997a225acc6cb36925778af69b7c1bb5&oe=5F46B8B6" />
          <meta property="og:image" content="https://lh3.googleusercontent.com/QTqGKCrpN0BYJdQ_A9Ne-dVk5rpdjX3ZdTb9ee2GjHBNpJRpxBTH6fR0lVorPFDFGDBD7-m8KAdAfKFzfbMDTyktFMvQTPaQMdlvkuxOgVJMdaNJ-YpIjiN0kw4NGeFhlWPTLn8itHr4GET60azy4-hC4Fqv1yVCy0LPpqn3C9Z1SHANru6y5TDgwgluMFwgBvePC-ULBq1DSddEf4V7cPW7xISDMAwGoQkEIeAATbjDzSwLvyl_VWq5lJHT5SyHwTm-fzbkqYWI_r7XxY2sSSvhwSggCgxTB_LuKzcFE73BkjHNy0oYCGfj2gQj6g-lRGB8-s6yo-hDCFVX0VW9i1Js49ZByX99BVgXBHFj-c-ZtZ2db9Qx2ZOYCM4rAD5ADtERqtaLc28qvliljqvUIgMq4HPsdAKx7YoZzeICnPmVPkXBPtU8Zi3uOsjzvlK7Jry0HT5jPJGcRUbRRVq7V4PlEj3qxIdUPgknyDytLVdY0xsQhycBBw7molcTxdcx2OCQ10irCo9e30hlwMOz8ZQCuOK1i5ieR2nD4X6iCR2l7GFy_NeJHjJFbZLJYc0MJGU1-ws0AqzYdxIV2emEDpZ3YMzZx4gEntBwuARPOFXgBEUoRsBM1hMrv4eLyBpa2tBSLOx3eiEwttamJq_TuWuT_rFPUjS_i2aYJz1DDWzQ2AUIz7eOrU0toA4rB3JGXbVH=w983-h779-ft" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:alt" content="Snapshot of the Website" />
          <meta property="og:audio" content="http://datashat.net/music_for_programming_1-datassette.mp3" />
          <meta property="og:audio:type" content="audio/mp3" />
        </Helmet>
        <Loading loading={this.state.loading} />
      { !this.state.loading && <MusicController audio={this.audio} /> }
        { !this.state.loading && <App />}
      </>
    );
  }
};
