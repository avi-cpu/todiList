import React, { Component } from "react";

import "./item-add-form.css";

export default class ItemAddForm extends Component {

  constructor() {
    super();

    this.state = {
      labelText: ""
    };
  }

  render() {

    const { onAdded: addItem } = this.props,
          { labelText }        = this.state;

    const onFormSubmit = (evt) => {
      evt.preventDefault();

      this.setState({
        labelText: ""
      });
    }

    const onLabelChange = ({ target: { value } }) => {
      this.setState({
        labelText: value
      });
    }

    return (
      <form 
        className="item-add-form d-flex"
        onSubmit={ (evt) => { onFormSubmit(evt) } }>

        <input 
          type="text"
          className="form-control"
          placeholder="What needs to be done"
          value={ labelText }
          onChange={ (evt) => { onLabelChange(evt) } }/>

        <button 
          className="btn btn-outline-secondary"
          onClick={ () => { addItem(labelText); } }>Add Item</button>
      </form>
    );
  }
}