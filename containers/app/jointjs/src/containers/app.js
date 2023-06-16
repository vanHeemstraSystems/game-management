import React from 'react';
import Dashboard from './dashboard';
import DynamicContainer from './dynamicContainer';
import Footer from './footer';

class App extends React.Component {
    render() {
        return (
            <div className='container-narrow wrapper'>
                <Dashboard />
                <DynamicContainer />
                <Footer />
            </div>
        );
    }
}

export default App;
