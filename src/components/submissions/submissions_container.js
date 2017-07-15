import { connect } from 'react-redux';
import Submission from './submissions';
import { values } from 'lodash';

const mapStateToProps = (state) => ({
  subs: values(state.subs)
});

export default connect(mapStateToProps,null)(Submission);
