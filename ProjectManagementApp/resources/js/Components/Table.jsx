import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
    Paper,
} from '@mui/material';

export default function TableComponent({
    data, // Array of table data
    columns, // Array of column definitions { id: 'key', label: 'Column Header' }
    total, // Total number of items
    page, // Current page (zero-based index)
    rowsPerPage, // Number of rows per page
    onPageChange, // Function to handle page change
    onRowsPerPageChange, // Function to handle rows per page change
}) {
    return (
        <Paper>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell key={column.id}>{column.label}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, index) => (
                            <TableRow key={index}>
                                {columns.map((column) => (
                                    <TableCell key={column.id}>
                                        {row[column.id]}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                component="div"
                count={total} // Total items
                page={page}
                onPageChange={(event, newPage) => onPageChange(newPage)}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={(event) =>
                    onRowsPerPageChange(parseInt(event.target.value, 10))
                }
            />
        </Paper>
    );
}
