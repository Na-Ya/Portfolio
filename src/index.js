import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
	<React.Fragment>
		<App /> <CssBaseline />
	</React.Fragment>,
	document.getElementById('root')
);
registerServiceWorker();
