import React from 'react';

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { posts }  = this.props;
    let postsArray = posts.map(post => <li key={post.id}>post.body</li>);
    return(
      <div className="comments">
        <ul>
          {postsArray}
        </ul>
      </div>
    );
  }
}

export default Comments;
