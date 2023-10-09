import './App.css';
import React, { useEffect, useState } from 'react';
import { API_KEY } from '../API_KEY';
import FormURL from './components/FormURL';
import { validateURL } from './logic/validateURL';
import ShortURL from './components/ShortURL';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import river from './assets/river.png';
import './app.css';
import logo from './assets/logo.png';

function App() {
	const [formData, setFormData] = useState('');
	const [responseMessage, setResponseMessage] = useState(null);

	// useEffect(() => {
	// 	const url = 'https://api-ssl.bitly.com/v4/shorten';
	// 	const options = {
	// 		method: 'POST',
	// 		headers: {
	// 			Authorization: API_KEY,
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify({
	// 			long_url: formData,
	// 			domain: 'bit.ly',
	// 		}),
	// 	};

	// 	if (validateURL(formData)) {
	// 		fetch(url, options)
	// 			.then(response => response.json())
	// 			.then(data => setResponseMessage(data))
	// 			.catch(error => console.error('Error:', error));
	// 	}
	// }, [formData]);

	useEffect(() => {
		const url = `https://api.shrtco.de/v2/shorten?url=${formData}/very/long/link.html`;
		// const options = {
		// 	method: 'POST',
		// 	headers: {
		// 		Authorization: API_KEY,
		// 		'Content-Type': 'application/json',
		// 	},
		// 	body: JSON.stringify({
		// 		long_url: formData,
		// 		domain: 'bit.ly',
		// 	}),
		// };

		if (validateURL(formData)) {
			fetch(url)
				.then(response => response.json())
				.then(data => setResponseMessage(data))
				.catch(error => console.error('Error:', error));
		}
	}, [formData]);

	console.log(responseMessage);

	return (
		<main className='main'>
			<div className='app'>
				<div className='short-result'>
					<img src={logo} alt='' className='logo' />
					<FormURL formData={formData} setFormData={setFormData} />
					{responseMessage && (
						<div className='copy'>
							<ShortURL>{responseMessage.result.full_share_link}</ShortURL>
							<CopyToClipboard text={responseMessage.result.full_share_link}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									style={{
										fill: 'rgba(255, 251, 251, 1)',
									}}
								>
									<path d='M19 3h-2.25a1 1 0 0 0-1-1h-7.5a1 1 0 0 0-1 1H5c-1.103 0-2 .897-2 2v15c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 17H5V5h2v2h10V5h2v15z'></path>
								</svg>
							</CopyToClipboard>
						</div>
					)}
				</div>

				<figure className='image-container'>
					<img src={river} alt='' className='img' />
				</figure>
			</div>
		</main>
	);
}

export default App;
