import React, { Component } from 'react';
import SearchBarContainer from './search_bar/search_bar_container';
import CommentsContainer from './comments/comments_container';
import SubmissionContainer from './submissions/submissions_container';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBarContainer/>
        <div className="return-values">
        <CommentsContainer/>
        <SubmissionContainer/>
        </div>
      </div>
    );
  }
}
