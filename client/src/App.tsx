import React, { useEffect, useState } from 'react';

const AppBase: React.FC = () => {
	const [clientMessage, setClientMessage] = useState('');

	useEffect(() => {
		setClientMessage('Hello From React');
	});

	return (
		<>
			<h1>Hello World!</h1>
			<h2>{clientMessage}</h2>
		</>
	);
};

export const App = <AppBase />;

// clear && yarn server:build && yarn start

// https://github.com/adamjberg/react-ssr