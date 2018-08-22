import React from 'react';
import TableHeading from './TableHeading';

// class TableHeadings extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         const headings = this.props.data.map((dataItem, index) => {
//             return (<TableHeading key={`table-heading-${index}`} data={dataItem}/>)
//         });
//         return (<thead><tr>{headings}</tr></thead>)
//     }
// }

const TableHeadings = (props) => {
    const { data } = props;
    return (
        <thead>
            <tr>
                {data.map((dataItem, index) => (<TableHeading key={`table-heading-${index}`} data={dataItem} />))}
            </tr>
        </thead>);
};

export default TableHeadings;
