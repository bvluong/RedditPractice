import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: ""};
    this.updateHandler = this.updateHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  updateHandler(e) {
    e.preventDefault();
    this.setState({input: e.target.value});
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.fetchPosts(this.state.input);
    this.props.fetchSubmissions(this.state.input);
    this.setState({input: ""});
  }

  render() {
    return(
      <div>
        <form onSubmit={this.submitHandler}>
          <input type="text"
            value={this.state.input}
            onChange={this.updateHandler}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default SearchBar;
