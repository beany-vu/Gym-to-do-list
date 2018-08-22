import React from 'react';

// class TableHeading extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         const data = this.props.data;
//
//         return(<th>{data}</th> )
//     }
// }

const TableHeading = (props) => {
    const { data } = props;
    return (<th>{data}</th>);
};

export default TableHeading;
