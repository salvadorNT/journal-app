import { Box, Divider, Drawer, Grid, List, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { SideBarItem } from "./";

export const SideBar = ({ drawerWitdth }) => {
    const { displayName } = useSelector(state => state.auth);
    const { notes } = useSelector(state => state.journal)
    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWitdth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant="permanent"
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: "border-box", width: drawerWitdth }
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        {displayName}
                    </Typography>
                </Toolbar>

                <Divider />
                <List>
                    {
                        notes.map(note => (
                            <SideBarItem key={note.id} {...note} />
                        ))
                    }
                </List>

            </Drawer>

        </Box>
    )
}
