import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TrashTable from './screens/TrashTable';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TrashTable />, document.getElementById('root'));
registerServiceWorker();
