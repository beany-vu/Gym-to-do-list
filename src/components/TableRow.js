import React from 'react';

// class TableRow extends React.Component {
//     constructor(props) {
//         super(props);
//         console.log(this.props);
//         console.log(11)
//     }
//     render() {
//         if (this.props.data !== undefined) {
//             const data =  this.props.data;
//             return (
//                     <tr>
//                         <td>{data.name}</td>
//                         <td>{data.category}</td>
//                         <td>{data.equipment}</td>
//                     </tr>
//             );
//         }
//     }
// }

const TableRow = (props) => {
    const { data } = props;
    return (
        <tr>
            <td>{data.name}</td>
            <td>{data.category}</td>
            <td>{data.equipment}</td>
        </tr>
    );
};

export default TableRow;
