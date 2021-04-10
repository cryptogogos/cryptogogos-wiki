import React from 'react';
import {Helmet} from 'react-helmet';
import favIco from '../../assets/favicon-32x32.png'
import socialMediaThumb from '../../assets/socialMediaThumb.png'
export default function SEO({title, description, siteName}) {
  return (
    <Helmet>
    <title>CryptoGOGOs - WIKI</title>
    <link rel="icon" type="image/png" href={favIco} sizes="32x32" />
    <meta property="og:image" content={socialMediaThumb}/>
    <meta name="application-name" content="CryptoGOGOs - Wiki"/>
    <meta name="msapplication-TileColor" content="#FFFFFF" />
    </Helmet>
  );
}