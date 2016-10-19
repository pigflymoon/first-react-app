import React from 'react';

export default class LocationItem extends React.Component {

    handleClick() {
        this.props.onClick(this.props.address);
    }

    render() {

        var cn = "list-group-item";

        if (this.props.active) {
            cn += " active-location";
        }

        return (
            <a className={cn} onClick={this.handleClick.bind(this)}>
                {this.props.address}
        
                <span className="glyphicon glyphicon-menu-right"></span>
            </a>
        )

    }
}

// export default LocationItem;