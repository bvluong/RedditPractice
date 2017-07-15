import { connect } from 'react-redux';
import Comments from './comments';

const mapStateToProps = (state) => ({
  posts: state.posts
});

export default connect(mapStateToProps, null)(Comments);
