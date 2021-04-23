import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  
  render() {
    
    const { onFilterToggled: toggleFilter } = this.props;

    return (
      <div className="btn-group">
        <button type="button"
                className="btn btn-info"
                onClick={ () => { toggleFilter("all"); } }>All</button>
        <button type="button"
                className="btn btn-outline-secondary"
                onClick={ () => { toggleFilter("active"); } }>Active</button>
        <button type="button"
                className="btn btn-outline-secondary"
                onClick={ () => { toggleFilter("done"); } }>Done</button>
      </div>
    );
  }
}