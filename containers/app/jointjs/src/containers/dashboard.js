import React from 'react';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="header">
                <h1>Map Management</h1>
                {this.props.children}
            </div>
        );
    }
}

export default Dashboard;
