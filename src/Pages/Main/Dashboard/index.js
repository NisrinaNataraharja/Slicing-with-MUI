import React from 'react'
import Sidebar from '../../../components/Sidebar/index'
import SideChild from '../../../components/SidebarChild'
import Content from '../../../components/Content';
import Box from '@mui/material/Box';

const Dashboard = () => {
    return (
        <>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <Sidebar />
                <SideChild />
                <Content/>
            </Box>
        </>
    )
}

export default Dashboard