import { connect } from 'react-redux';
import Table from '../components/Table';

const mapStateToProps = state => ({
    tableRows: state.exercises
});

export default connect(mapStateToProps)(Table);