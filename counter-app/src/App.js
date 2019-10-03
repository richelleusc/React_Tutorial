import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    nextId: 5,
    counters: [
      { id: 1, value: 4, item: "Apple" },
      { id: 2, value: 3, item: "Banana" },
      { id: 3, value: 2, item: "Watermelon" },
      { id: 4, value: 0, item: "Pear" }
    ]
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    //Ajax Call
    console.log("App - Mounted");
  }

  handleIncrement = counter => {
    console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    console.log(this.state.counters[0]);
    this.setState({ counters });
  };

  handleDecrement = counter => {
    console.log("handleDecrement");
    if (counter.value > 0) {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value--;
      this.setState({ counters });
    }
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  handleDelete = counterId => {
    console.log("Event Handler Called", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleAdd = itemName => {
    if (itemName !== "") {
      console.log("itemName: ", itemName);
      const counters = [...this.state.counters];
      counters.push({ id: this.state.nextId, value: 0, item: itemName });
      console.log(counters);
      let updateIndex = this.state.nextId;
      updateIndex++;
      this.setState({ counters });
      this.setState({ nextId: updateIndex });
    }
  };

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
            onAdd={this.handleAdd}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
