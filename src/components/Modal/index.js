import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '450px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: '2% 1% 4% 1%',
};

export default function BasicModal(props) {

    return (
        <div>
            <Modal
                open={props.open}
                
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography id="modal-modal-title" variant="h5" component="h2" >
                            <b>Add Information</b>
                        </Typography>
                        <Button><CloseIcon sx={{ color: 'lightGray', fontSize: '30px' }} onClick={props.handleClose} /></Button>
                    </Box>
                    <Divider />
                    <Typography id="modal-modal-title" sx={{ mt: 2 }} variant="h6" component="h2">
                        <b>Title</b>
                    </Typography>
                    <TextField placeholder='Title' sx={{ width: '450px' }} />
                    <Typography id="modal-modal-message" sx={{ mt: 2 }} variant="h6" component="h2">
                        <b>Message</b>
                    </Typography>
                    <TextField placeholder='Message' sx={{ width: '450px' }} InputProps={{ sx: { height: 140 } }} />
                    <Typography id="modal-modal-message" sx={{ mt: 2 }} variant="h6" component="h2">
                        <b>Important</b>
                    </Typography>
                    <div>
                        <FormControl sx={{ mt: 1, minWidth: 200, mb: 2 }}>
                            <Select
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="Yes">
                                    <b>Yes</b>
                                </MenuItem>
                                <MenuItem value={'No'}><b>No</b></MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <Divider />
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt:2 }}>
                        <Button sx={{
                            background: '#F7EDFD',
                            borderRadius: '5px',
                            widht: '90px',
                            color: '#3F3192',
                            ml:3,
                        }} onClick={props.handleClose}>Cancel</Button>
                        <Button sx={{
                            background: '#3F3192',
                            borderRadius: '5px',
                            widht: '90px',
                            color: '#ffff',
                            ml:3
                        }}
                        >Add</Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
