import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as filterActions from '../actions/filter'
import Menu from '../components/Menu'

const mapStateToProps = ({cart}) => ({
    totalPrice: cart.items.reduce((total, book)) => total + book.price, 0)
});
  
  const mapDispatchToProps = dispatch => ({
   ...bindActionCreators(cartActions, dispatch)
  });
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(Menu);