import * as React from 'react';
import Box from '@mui/material/Box';
import { General } from '../Dummy/dummy'
import Divider from '@mui/material/Divider';

export default function SideChild() {
    return (
        <Box
            sx={{
                width: 248,
                height: '100vh',
                backgroundColor: '#F4F5F7',
            }}
        >
            <Box
                sx={{
                    fontSize: '16px',
                    fontWeight: 700,
                    margin: '4vh 0 5vh 8%'
                }}
            > SERVICE</Box>
            {General.map((item, index) => {
                return (
                    <Box>
                        <Box key={index} sx={{ display: 'flex', marginTop: '10%' }}>
                            <Box sx={{ marginLeft: '8%' }}> {item.icon} </Box>
                            <Box sx={{
                                marginLeft: '5%',
                                fontWeight: 600,
                                fontSize: '14px'
                            }}> {item.nama} </Box>
                        </Box>
                        <Divider variant="middle" sx={{ background: '#E1E3E5' }} />
                        <Box>{item.sub_item.map((data, idx) => {
                            return (
                                <Box key={idx} sx={{
                                    margin: '5% 5% 5% 15%',
                                    color: '#3F3192',
                                    fontWeight: 500,
                                    fontSize: '14px'

                                }}>{data.nama}</Box>
                            )
                        })}</Box>

                    </Box>
                )
            })}
        </Box>
    );
}
