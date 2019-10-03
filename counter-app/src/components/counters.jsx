import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.props.onAdd(this.state.value);
    event.preventDefault();
    this.setState({ value: "" });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement
    } = this.props;

    return (
      <div>
        <form className="form-inline mt-2 mt-md-0" onSubmit={this.handleSubmit}>
          <button onClick={onReset} className="btn btn-primary btn-sm m-2">
            Reset
          </button>
          <button className="btn btn-outline-success btn-sm m-2" type="submit">
            Add
          </button>
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Item Name"
            onChange={this.handleChange}
            value={this.state.value}
          ></input>
        </form>
        {this.props.counters.map(counter => (
          <Counter
            counter={counter}
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
