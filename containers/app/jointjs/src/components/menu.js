import React from 'react';
import MenuList from './menuList';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
              {
                  "id": 1,
                  "componentName": "Value-Streams",
                  "color": "blue",
                  "position": {"x": 36, "y": 36}
              },
              {
                  "id": 2,
                  "componentName": "Jobs-to-be-Done",
                  "color": "orange",
                  "position": {"x": 40, "y": 40}
              },
              {
                  "id": 3,
                  "componentName": "Problem",
                  "color": "red",
                  "position": {"x": 44, "y": 44}
              },
              {
                  "id": 4,
                  "componentName": "Solution",
                  "color": "green",
                  "position": {"x": 48, "y": 48}
              },
              {
                  "id": 5,
                  "componentName": "Goal",
                  "color": "olive",
                  "position": {"x": 52, "y": 52}
              },
              {
                  "id": 6,
                  "componentName": "Process",
                  "color": "lime",
                  "position": {"x": 56, "y": 56}
              },
              {
                  "id": 7,
                  "componentName": "Action",
                  "color": "lightblue",
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
