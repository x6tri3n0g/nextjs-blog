// To load global CSS files, create a file called pages/_app.js
import React from 'react';
import '../styles/global.css';

export default function App({ Component, pageProps }) {
	return <Component {...pageProps} />;
}
