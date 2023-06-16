import React from 'react';
import MenuItem from './menuItem';

class MenuList extends React.Component{
    render() {
        var menuItems = this.props.data.map(function(menuItem) {
            return (
                <li role="presentation" key={menuItem.id}>
                    <MenuItem label={menuItem.componentName} position={menuItem.position} />
                </li>
            );
        });
        return (
            <ul className="wrapper no-bullets">
                {menuItems}
            </ul>
        )
    }
}

export default MenuList;
