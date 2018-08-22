import React from 'react';
import TableRow from './TableRow';

// class TableRows extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         const rows = this.props.data.map((dataItem, index)=> {
//             return (<TableRow key={`table-data-${index}`} data={dataItem}/>)
//         })
//         return (<tbody>{rows}</tbody>);
//     }
// }

const TableRows = (props) => {
    const { data } = props;
    return (
        <tbody>
            {data.map((dataItem, index) => (<TableRow key={`table-data-${index}`} data={dataItem} />))}
        </tbody>
    );
};

export default TableRows;
