import { connect } from 'react-redux';
import {bindActionsCreators} from 'redux';
import * as booksActions from '../actions/books';
import App from '../components/App'


const mapStateToProps = ({books}) => ({
    books: books.items,
    isReady: books.isReady
  });
  
  const mapDispatchToProps = dispatch => ({
   ...bindActionsCreators(booksActions, dispatch),
  
});
  
  
export default connect(mapStateToProps, mapDispatchToProps)(App);