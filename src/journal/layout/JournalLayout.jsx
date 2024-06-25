import { Box } from "@mui/material"
import { Navbar } from "../components"

const drawerWitdth = 240;
export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            {/* Navbar */}
            <Navbar drawerWitdth={drawerWitdth} />
            {/* Sidebar */}
            <Box
                component={'main'}
                sx={{ flexGrow: 1, p: 3 }}
            >
                {/* Toolbar */}
                {children}
            </Box>
        </Box>
    )
}
