import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: ""};
  }

  render() {
    return(
      <div>
        <form>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default SearchBar;
