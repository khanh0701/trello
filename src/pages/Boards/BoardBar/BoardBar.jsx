import { Box, Button, Chip, Tooltip } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import AnimationIcon from '@mui/icons-material/Animation'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import avatar from '~/assets/anhcv2.jpg'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'

const MenuStyle = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': { color: 'white' },
  '&:hover': { bgcolor: 'primary.50' },
}

function BoardBar() {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: (theme) => theme.trello.boarBarHeight,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          paddingX: 2,
          overflowX: 'auto',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Chip sx={MenuStyle} icon={<DashboardIcon />} label=" Mr. K Dev" clickable />
          <Chip sx={MenuStyle} icon={<VpnLockIcon />} label="Pullic/Private Workspaces" clickable />
          <Chip sx={MenuStyle} icon={<AddToDriveIcon />} label="Add To Google Drive" clickable />
          <Chip sx={MenuStyle} icon={<AnimationIcon />} label="Automation" clickable />
          <Chip sx={MenuStyle} icon={<FilterListIcon />} label="Filter" clickable />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button sx={{ color: 'white', borderColor: 'white', '&:hover': { borderColor: '#bdc3c7' } }} variant="outlined" startIcon={<PersonAddAltIcon />}>
            Invite
          </Button>
          <AvatarGroup
            max={4}
            sx={{
              '& .MuiAvatar-root': { width: '34px', height: '34px', fontSize: 16, color: 'white', border: '0.5px solid ' },
            }}
          >
            <Tooltip title="Mr. K Dev">
              <Avatar alt="Mr. K Dev" src={avatar} />
            </Tooltip>
            <Tooltip title="Mr. K Dev">
              <Avatar alt="Mr. K Dev" src={avatar} />
            </Tooltip>
            <Tooltip title="Mr. K Dev">
              <Avatar alt="Mr. K Dev" src={avatar} />
            </Tooltip>
            <Tooltip title="Mr. K Dev">
              <Avatar alt="Mr. K Dev" src={avatar} />
            </Tooltip>
            <Tooltip title="Mr. K Dev">
              <Avatar alt="Mr. K Dev" src={avatar} />
            </Tooltip>
            <Tooltip title="Mr. K Dev">
              <Avatar alt="Mr. K Dev" src={avatar} />
            </Tooltip>
            <Tooltip title="Mr. K Dev">
              <Avatar alt="Mr. K Dev" src={avatar} />
            </Tooltip>
          </AvatarGroup>
        </Box>
      </Box>
    </>
  )
}

export default BoardBar
