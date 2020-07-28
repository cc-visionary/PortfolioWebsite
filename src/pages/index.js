import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
// import Title from '../components/Title/Title';
import Loading from '../components/Loading/Loading'

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
    this.sleep(9000).then(() => {
      this.setState({loading: false})
    }).then(() => {

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
          <meta property="og:url" content="christopherlim.surge.sh" />
          <meta property="og:image" content="https://lh3.googleusercontent.com/QTqGKCrpN0BYJdQ_A9Ne-dVk5rpdjX3ZdTb9ee2GjHBNpJRpxBTH6fR0lVorPFDFGDBD7-m8KAdAfKFzfbMDTyktFMvQTPaQMdlvkuxOgVJMdaNJ-YpIjiN0kw4NGeFhlWPTLn8itHr4GET60azy4-hC4Fqv1yVCy0LPpqn3C9Z1SHANru6y5TDgwgluMFwgBvePC-ULBq1DSddEf4V7cPW7xISDMAwGoQkEIeAATbjDzSwLvyl_VWq5lJHT5SyHwTm-fzbkqYWI_r7XxY2sSSvhwSggCgxTB_LuKzcFE73BkjHNy0oYCGfj2gQj6g-lRGB8-s6yo-hDCFVX0VW9i1Js49ZByX99BVgXBHFj-c-ZtZ2db9Qx2ZOYCM4rAD5ADtERqtaLc28qvliljqvUIgMq4HPsdAKx7YoZzeICnPmVPkXBPtU8Zi3uOsjzvlK7Jry0HT5jPJGcRUbRRVq7V4PlEj3qxIdUPgknyDytLVdY0xsQhycBBw7molcTxdcx2OCQ10irCo9e30hlwMOz8ZQCuOK1i5ieR2nD4X6iCR2l7GFy_NeJHjJFbZLJYc0MJGU1-ws0AqzYdxIV2emEDpZ3YMzZx4gEntBwuARPOFXgBEUoRsBM1hMrv4eLyBpa2tBSLOx3eiEwttamJq_TuWuT_rFPUjS_i2aYJz1DDWzQ2AUIz7eOrU0toA4rB3JGXbVH=w983-h779-ft" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:alt" content="Snapshot of the Website" />
          <meta property="og:audio" content="http://datashat.net/music_for_programming_1-datassette.mp3" />
          <meta property="og:audio:type" content="audio/mp3" />
        </Helmet>
        <Loading loading={this.state.loading} />
        { !this.state.loading && <App />}
      </>
    );
  }
};
