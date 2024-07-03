import { Box, Toolbar } from "@mui/material"
import { Navbar, SideBar } from "../components"

const drawerWitdth = 240;
export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }} className="animate__animated animate__fadeIn animate__faster">
            {/* Navbar */}
            <Navbar drawerWitdth={drawerWitdth} />
            {/* Sidebar */}
            <SideBar drawerWitdth={drawerWitdth} />
            <Box
                component={'main'}
                sx={{ flexGrow: 1, p: 2 }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    )
}
