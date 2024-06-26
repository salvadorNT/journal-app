import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";

const drawerWitdth = 240;

export const JournalPage = () => {
  return (
    <>
      <JournalLayout>
        {/* <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi atque numquam molestiae ullam et enim amet, eaque, culpa vitae sed sunt ut eligendi harum expedita veritatis, nemo fugit ratione est.</Typography> */}
        <NothingSelectedView />

        <IconButton
        size="large"
        sx={{
          color:"white",
          backgroundColor: 'error.main',
          ':hover': {backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right:50,
          bottom: 50

        }}
        >
          <AddOutlined sx={{fontSize:30}}/>
        </IconButton>
      </JournalLayout>
    </>
  )
}
