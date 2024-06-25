import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const Navbar = ({ drawerWitdth }) => {
    return (
        <AppBar
            position='fixed'
            sx={{
                width: { sm: `calc(100% - ${drawerWitdth}px)` },
                ml: { sm: `${drawerWitdth}px` }
            }}
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge="start"
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>

                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography variant='h6' noWrap component={'div'}>JournalApp</Typography>

                    <IconButton
                        color='error'
                    >
                        <LogoutOutlined />
                    </IconButton>

                </Grid>
            </Toolbar>

        </AppBar>
    )
}
