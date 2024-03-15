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
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profile from './Menus/Profile'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

function AppBar() {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: (theme) => theme.trello.appBarHeight,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          paddingX: 2,
          overflowX: 'auto',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <AppsIcon sx={{ color: 'primary.main' }} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <SvgIcon component={logoTrello} inheritViewBox fontSize="small" sx={{ color: 'primary.main' }} />
            <Typography variant="span" sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'primary.main' }}>
              Trello
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            <WorkSpaces />
            <Recent />
            <Starred />
            <Templates />
            <Button variant="outlined" startIcon={<AddCircleOutlineIcon />}>
              Create
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <TextField id="outlined-search" label="Search..." type="search" size="small" sx={{ minWidth: '120px' }} />
          <DarkMode />
          <Tooltip title="Notifications" sx={{ mr: 1 }}>
            <Badge badgeContent={17} color="secondary">
              <NotificationsNoneIcon sx={{ color: 'primary.main' }} />
            </Badge>
          </Tooltip>
          <Tooltip title="Help">
            <Badge badgeContent={17} color="secondary">
              <HelpOutlineIcon sx={{ color: 'primary.main' }} />
            </Badge>
          </Tooltip>
          <Profile />
        </Box>
      </Box>
    </>
  )
}

export default AppBar
