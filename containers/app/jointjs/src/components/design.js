import React from 'react';
import Dashboard from '../containers/dashboard';
import Menu from './menu';
import Playground from './playground';
import Footer from '../containers/footer';

class Design extends React.Component {
    render() {
        return (
            <div>
                <Dashboard />
                <div className="row">
                    <div className="col-md-2">
                        <Menu url={
                          [
                            {
                                "id": 1,
                                "componentName": "Company Purpose",
                                "color": "red",
                                "position": {"x": 36, "y": 36}
                            },
                            {
                                "id": 2,
                                "componentName": "Portfolio",
                                "color": "orange",
                                "position": {"x": 40, "y": 40}
                            },
                            {
                                "id": 3,
                                "componentName": "Product Portfolio",
                                "color": "yellow",
                                "position": {"x": 44, "y": 44}
                            },
                            {
                                "id": 4,
                                "componentName": "Goals",
                                "color": "green",
                                "position": {"x": 48, "y": 48}
                            },
                            {
                                "id": 5,
                                "componentName": "Initiatives / Tactics",
                                "color": "turqoise",
                                "position": {"x": 52, "y": 52}
                            },
                            {
                                "id": 6,
                                "componentName": "Ideas",
                                "color": "blue",
                                "position": {"x": 56, "y": 56}
                            },
                            {
                                "id": 7,
                                "componentName": "Stories",
                                "color": "purple",
                                "position": {"x": 60, "y": 60}
                            }
                          ]
                        } pollInterval={2000} />
                    </div>
                    <div className="col-md-10">
                        <Playground />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Design;
