// To load global CSS files, create a file called pages/_app.js
import React from 'react';
import '../styles/global.css';

export default function App({ Component, pageProps }) {
	console.log(process.env.NEXT_PUBLIC_TEST);
	return <Component {...pageProps} />;
}
