import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined'
import SystemModeIcon from '@mui/icons-material/SettingsBrightness'
import { Box } from '@mui/material'
function DarkMode() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    setMode(event.target.value)
  }
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel sx={{ color: 'white', '&.Mui_focused': { color: 'white' } }} id="select-dark-mode">
        Mode
      </InputLabel>
      <Select
        labelId="select-dark-mode"
        id="dark-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
        sx={{
          color: 'white',
          '.MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
          '&.MuiSvgIcon-root': { color: 'red' },
        }}
      >
        <MenuItem value="light">
          <Box style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <LightModeIcon fontSize="small" /> Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <DarkModeIcon fontSize="small" />
            Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <SystemModeIcon fontSize="small" />
            System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}
export default DarkMode
