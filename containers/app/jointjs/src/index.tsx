import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import './assets/jointjs.css';
import configureStore from './store/configureStore';
import App from './containers/app';
import Design from './components/design';
import reportWebVitals from './reportWebVitals';

const store = configureStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App />} />
        <Route path="/home" element={ <App />} />
        <Route path="/design" element={ <Design />} />
      </Routes>
    </BrowserRouter>  
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
