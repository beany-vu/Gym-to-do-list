import React from 'react';
import Table from './containers/Table';
import './App.css';

const tableHeadings = ['name', 'category', 'equipment'];
// const tableRows = [
//     {
//         name: 'Axe Hold',
//         category: 'Arm',
//         equipment: 'Dumbell'
//     },
//     {
//         name: 'Barbell Triceps Extension',
//         category: 'Arm',
//         equipment: 'Barbell'
//     },
//     {
//         name: 'Barbell Hack Squats',
//         category: 'Arm',
//         equipment: 'Barbell'
//     },
//     {
//         name: 'Barbell Lunges',
//         category: 'Leg',
//         equipment: 'Barbell'
//     },
//     {
//         name: 'Barbell Hack Squats',
//         category: 'Leg',
//         equipment: 'Barbell'
//     }
// ];

// class App extends React.Component {
//     render() {
//         return (
//             <Table tableHeadings={tableHeadings} tableRows = { tableRows }></Table>
//         )
//     }
// }
//
// export default App;

const App = props => {
    return(
        <Table tableHeadings={tableHeadings}></Table>
    )
}
export default App;