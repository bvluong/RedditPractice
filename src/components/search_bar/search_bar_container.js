import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { fetchPosts } from '../actions/post_actions';

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: (username) => dispatch(fetchPosts(username))
});

export default connect(null,mapDispatchToProps)(SearchBar);
