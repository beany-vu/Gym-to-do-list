import { connect } from 'react-redux';
import Table from '../components/Table';
import { exercisesSelector } from '../store/selectors/exercises';

const mapStateToProps = state => ({
    tableRows: exercisesSelector(state),
});

export default connect(mapStateToProps)(Table);
