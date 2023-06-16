import React from 'react';
import MenuList from './menuList';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
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
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <h2>Value-Streams</h2>
                <MenuList data={this.state.data} />
            </div>
        );
    }
}

export default Menu;
