import { connect } from 'react-redux';
import {bindActionsCreators} from 'redux';
import * as filterActions from '../actions/filter'
import Filter from '../components/Filter'

const mapStateToProps = ({books}) => ({
    filterBy: books.filterBy
  });
  
  const mapDispatchToProps = dispatch => ({
   ...bindActionsCreators(filterActions, dispatch)
  });
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(Filter);