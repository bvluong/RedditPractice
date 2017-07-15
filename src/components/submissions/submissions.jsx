import React from 'react';

class Submission extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { subs } = this.props;
    let subsArray = subs.map(sub =>
      <li key={sub.id}>
        <h4> {sub.title} </h4>
        <h4> {sub.score} </h4>
      </li>);
    return (
      <div className="submission">
        <ul>
          {subsArray}
        </ul>
      </div>
    );
  }
}

export default Submission;
