import { renderToString } from 'react-dom/server';
import { App } from '../../client/src/App';

const app = renderToString(App);
const html = `
	<html lang='en'>
	<head>
		<script src='app.js' async defer></script>
	</head>
	<body>
		<div id='root'>${app}</div>
	</body>
	</html>
`;

export const htmlString = html;
