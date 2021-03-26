import React from "react";
import IncDec from "./IncDec";
class LiftingState extends React.Component {
  state = {
    counter: [
      { id: 1, value: 1 },
      { id: 1, value: 2 },
      { id: 1, value: 3 },
      { id: 1, value: 4 }
    ]
  };
  render() {
    return this.state.counter.map((counter) => (
      <IncDec key={counter.id} value={counter.value} />
    ));
  }
}
export default LiftingState;