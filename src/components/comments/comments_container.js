import { connect } from 'react-redux';
import Comments from './comments';
import { values } from 'lodash';

const mapStateToProps = (state) => ({
  posts: values(state.posts)
});

export default connect(mapStateToProps, null)(Comments);
