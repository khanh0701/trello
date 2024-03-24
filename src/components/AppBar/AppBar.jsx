import Box from '@mui/material/Box'
import DarkMode from '~/components/DarkMode/DarkMode'
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as logoTrello } from '~/assets/logoTrello.svg'
import { Badge, Button, InputAdornment, SvgIcon, TextField, Tooltip } from '@mui/material'
import { Typography } from '@mui/material'
import WorkSpaces from './Menus/WorkSpaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profile from './Menus/Profile'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import SearchIcon from '@mui/icons-material/Search'

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
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0'),
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <AppsIcon sx={{ color: 'white' }} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <SvgIcon component={logoTrello} inheritViewBox fontSize="small" sx={{ color: 'white' }} />
            <Typography variant="span" sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}>
              Trello
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            <WorkSpaces />
            <Recent />
            <Starred />
            <Templates />
            <Button sx={{ color: 'white', borderColor: 'white', '&:hover': { borderColor: '#bdc3c7' } }} variant="outlined" startIcon={<AddCircleOutlineIcon />}>
              Create
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <TextField
            id="outlined-search"
            label="Search..."
            type="search"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'white' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              minWidth: '120px',
              maxWidth: '170px',
              '& label': { color: 'white' },
              '& label.Mui-focused': { color: 'white' },
              '& input': { color: 'white' },
              '& .MuiOutlinedInput-root  ': {
                '& fieldset': { borderColor: 'white' },
                '&:hover fieldset': { borderColor: 'white' },
                '&.Mui_focused fieldset': { borderColor: 'white' },
              },
            }}
          />
          <DarkMode />
          <Tooltip title="Notifications" sx={{ mr: 1 }}>
            <Badge badgeContent={17} color="error">
              <NotificationsNoneIcon sx={{ color: 'white' }} />
            </Badge>
          </Tooltip>
          <Tooltip title="Help">
            <Badge badgeContent={17} color="error">
              <HelpOutlineIcon sx={{ color: 'white' }} />
            </Badge>
          </Tooltip>
          <Profile />
        </Box>
      </Box>
    </>
  )
}

export default AppBar
