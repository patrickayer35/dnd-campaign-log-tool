import React from 'react';
import ReactDom from 'react-dom';
import campaigns from '../../data/test-data-empty.js';
import '../styles/styles-reset.scss';
import App from '../components/App/App.jsx';

ReactDom.render(<App data={campaigns} />, document.getElementById('root'));