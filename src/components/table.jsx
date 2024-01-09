import * as React from 'react';
import Table from '@mui/material/Table';
import { useTheme } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { SearchIcon, ArrowDownUp, Download } from "lucide-react";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Tooltip from '@mui/material/Tooltip';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ display: "flex" }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

const rows = [
    { id: "#281209", date: "7 July, 2023", amount: "1,23.23", fees: 841 },
    { id: "#281210", date: "7 July, 2023", amount: "1,234.23", fees: 841 },
    { id: "#2812021", date: "7 July, 2023", amount: "1,234.23", fees: 841 },
    { id: "#2812319", date: "7 July, 2023", amount: "1,234.23", fees: 848 },
    { id: "#281319", date: "7 July, 2023", amount: "1,234.23", fees: 848 },
    { id: "#281139", date: "7 July, 2023", amount: "1,234.23", fees: 848 },
    { id: "#281309", date: "7 July, 2023", amount: "1,234.23", fees: 23 },
    { id: "#2814109", date: "7 July, 2023", amount: "1,234.23", fees: 121 },
    { id: "#281419", date: "7 July, 2023", amount: "1,234.23", fees: 848 },
    { id: "#281449", date: "7 July, 2023", amount: "1,234.23", fees: 848 },
    { id: "#281469", date: "7 July, 2023", amount: "1,234.23", fees: 848 },
    { id: "#281469", date: "7 July, 2023", amount: "1,234.23", fees: 848 },
    { id: "#281469", date: "7 July, 2023", amount: "1,234.23", fees: 848 },
    { id: "#281469", date: "7 July, 2023", amount: "1,234.23", fees: 848 },
]

export default function BasicTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (
        <div className='space-y-3'>
            <div className="flex items-center justify-between">
                <div className="w-[248px] h-[40px] flex font-normal items-center px-[16px] py-[10px] overflow-hidden rounded border border-black85  space-x-2">
                    <SearchIcon className="w-3.5 h-3.5" />
                    <input className="bg-transparent w-full h-full text-sm focus:outline-none" placeholder="Seach by order ID..." />
                </div>
                <div className="flex items-center space-x-3 text-black30">
                    <button className="flex items-center py-[6px] px-3 justify-center  space-x-1 rounded border border-black85">
                        <div className="text-base ">Sort</div>
                        <ArrowDownUp className="h-4 w-4" />
                    </button>
                    <button className="flex border h-9 w-9 items-center justify-center rounded border-black85">
                        <Download className="h-[18px] w-[18px]" />
                    </button>
                </div>
            </div>
            <div className='overflow-x-scroll scroll-none  scroll-smooth'>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow className='bg-black95'>
                            <TableCell >Order ID</TableCell>
                            <TableCell >
                                <div className='flex items-center justify-start space-x-1'>
                                    <div>Date</div>
                                    <ArrowDropDownIcon fontSize='small' />
                                </div>
                            </TableCell>
                            <TableCell align="right">Order amount</TableCell>
                            <TableCell align="right">
                                <div className='flex items-center justify-end space-x-1'>
                                    <div>Transaction fees</div>
                                    <Tooltip title="some info"><InfoOutlinedIcon fontSize='small' /></Tooltip>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : rows).map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    className='hover:bg-black98'
                                >
                                    <TableCell component="th" scope="row">
                                        <p className='text-[#146EB4]'>{row.id}</p>
                                    </TableCell>
                                    <TableCell >{row.date}</TableCell>
                                    <TableCell align="right">₹{row.amount}</TableCell>
                                    <TableCell align="right">₹{row.fees}</TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[10, 15, 25, { label: 'All', value: -1 }]}
                                colSpan={3}
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: {
                                        'aria-label': 'rows per page',
                                    },
                                    native: true,
                                }}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </div>
    );
}
