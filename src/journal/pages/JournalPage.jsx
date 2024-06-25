import { Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views/NothingSelectedView";

const drawerWitdth = 240;

export const JournalPage = () => {
  return (
    <>
      <JournalLayout>
        {/* <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi atque numquam molestiae ullam et enim amet, eaque, culpa vitae sed sunt ut eligendi harum expedita veritatis, nemo fugit ratione est.</Typography> */}
        <NothingSelectedView />
      </JournalLayout>
    </>
  )
}
