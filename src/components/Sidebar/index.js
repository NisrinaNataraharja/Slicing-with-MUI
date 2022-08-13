import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { Activity, User, Interaction, Notification } from '../../assets/icon/icons'
import Logo from '../../assets/images/LOGO OMNI-X.png'
import Avatar from '../../assets/images/Circle - S.png'

export default function Sidebar() {
    return (
        <Box sx={{
            width: 60,
            height: '100vh',
            backgroundColor: '#3F3192',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column'
        }}>
            <Box>
                <Box>
                    <img src={Logo} alt="logo" style={{ width: '60px' }} />
                </Box>
                <Box sx={{
                    padding: '5vh 70% 5vh 30%'
                }}>
                    <Activity />
                </Box>
                <Box sx={{
                    padding: '0 70% 2vh 30%'
                }}><User />
                </Box>
                <Box sx={{
                    padding: '0 0 2vh 0',
                    marginLeft: '-3px'
                }}>
                    <Divider variant="middle" sx={{ background: '#D1D1D1' }} />
                </Box>
                <Box sx={{
                    padding: '0 68% 5vh 32%'
                }}>
                    <Interaction />
                </Box>
            </Box>
            <Box>
                <Box sx={{
                    padding: '0 68% 5vh 32%'
                }}>
                    <Notification />
                </Box>
                <Box sx={{
                    padding: '0 0 5vh 15%',
                }}>
                    <img src={Avatar} alt='avatar' />
                </Box>
            </Box>

        </Box>
    );
}
