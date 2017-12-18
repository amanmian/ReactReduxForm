import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Values } from "redux-form-website-template";
import showResults from './components/showResults';
import SimpleForm from './components/SimpleForm';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './components/store';

ReactDOM.render(<Provider store={store}>
    <div>
        <h2>Simple Form</h2>
        <SimpleForm onSubmit={showResults} />
        <Values form="simple" />
    </div>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
