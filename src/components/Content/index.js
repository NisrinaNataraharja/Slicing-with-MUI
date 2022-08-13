import * as React from 'react';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import BasicTable from '../Table/index';
import Modal from '../Modal/index'

export default function Content() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box
            sx={{
                width: '100vw',
                height: '100vh',
                backgroundColor: '#ffff'
            }}
        >
            <Modal open={open}  handleClose={()=> handleClose()} />
            <Box sx={{ margin: '3% 0 2% 3%' }}>
                <Box sx={{ marginBottom: '1%', fontWeight: 700, fontSize: '20px' }}>Information</Box>
                <Box sx={{ fontWeight: 400, fontSize: '14px' }}>Admins can add and remove information.</Box>
            </Box>
            <Box sx={{ display: 'flex' , justifyContent: 'space-between', marginBottom:'1%'}}>
                <Box>
                    <FormControl sx={{ width: '385px', margin: '3% 0 2% 3%' }} variant="outlined">
                        <OutlinedInput
                            size='small'
                            placeholder='Search information...'
                            endAdornment={<InputAdornment position="end"><SearchIcon /></InputAdornment>}
                        />
                    </FormControl>
                </Box>
                <Box sx={{margin:'auto 1% auto 0'}}>
                    <Button variant="outlined" startIcon={<AddIcon /> }
                        sx={{
                            backgroundColor: '#3F3192',
                            color: '#ffff',
                        }} 
                        onClick={()=> handleOpen()} >
                        Add Information </Button>
                </Box>
            </Box>
            <Box>
                <BasicTable />
            </Box>
        </Box>
    );
}
