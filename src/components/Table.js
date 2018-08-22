import React from 'react';
import styled from 'styled-components';
import TableRows from './TableRows';
import TableHeadings from './TableHeadings';

const TableStyled = styled.table`
    color: red;    
`;

// class Table extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         const tableRows = this.props.tableRows;
//         const tableHeadings = this.props.tableHeadings;
//         return (
//             <TableStyled className="Table-workout">
//                 <TableHeadings data={tableHeadings} />
//                 <TableRows data={tableRows}/>
//             </TableStyled>
//         )
//     }
// }
//
// export default Table;

const Table = (props) => {
    const { tableRows, tableHeadings } = props;
    return (
        <TableStyled className="Table-workout">
            <TableHeadings data={tableHeadings} />
            <TableRows data={tableRows} />
        </TableStyled>
    );
};

export default Table;
