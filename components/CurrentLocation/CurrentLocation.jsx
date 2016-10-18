import React from 'react';

class CurrentLocation extends React.Component{

    toggleFavorite1(){
        this.props.onFavoriteToggle(this.props.address);
    }

    render(){

        var starClassName = "glyphicon glyphicon-star-empty";

        if(this.props.favorite){
            starClassName = "glyphicon glyphicon-star";
        }

        return (
            <div className="col-xs-12 col-md-6 col-md-offset-3 current-location">
                <h4 id="save-location">{this.props.address}</h4>
                <span className={starClassName} onClick={this.toggleFavorite1} aria-hidden="true"></span>
            </div>
        );
    }
}
export default CurrentLocation;
