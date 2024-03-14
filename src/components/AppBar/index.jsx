import Box from '@mui/material/Box'
import DarkMode from '~/components/DarkMode'
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as logoTrello } from '~/assets/logoTrello.svg'
import { Badge, Button, SvgIcon, TextField, Tooltip } from '@mui/material'
import { Typography } from '@mui/material'
import WorkSpaces from './Menus/WorkSpaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import NotificationsIcon from '@mui/icons-material/Notifications'
import HelpIcon from '@mui/icons-material/Help'
import Profile from './Menus/Profile'

function AppBar() {
  return (
    <>
      <Box
        px={2}
        sx={{
          width: '100%',
          height: (theme) => theme.trello.appBarHeight,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <AppsIcon sx={{ color: 'primary.main' }} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <SvgIcon component={logoTrello} inheritViewBox sx={{ color: 'primary.main' }} />
            <Typography variant="span" sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'primary.main' }}>
              Trello
            </Typography>
          </Box>
          <WorkSpaces />
          <Recent />
          <Starred />
          <Templates />
          <Button variant="outlined">Create</Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <TextField id="outlined-search" label="Search..." type="search" size="small" />
          <DarkMode />
          <Tooltip title="Notifications" sx={{ mr: 1 }}>
            <Badge badgeContent={17} color="secondary">
              <NotificationsIcon />
            </Badge>
          </Tooltip>
          <Tooltip title="Help">
            <Badge badgeContent={17} color="secondary">
              <HelpIcon />
            </Badge>
          </Tooltip>
          <Profile />
        </Box>
      </Box>
    </>
  )
}

export default AppBar
