import Box from '@mui/material/Box'
import DarkMode from '~/components/DarkMode'
function AppBar() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: 'primary.light',
          width: '100%',
          height: (theme) => theme.trello.appBarHeight,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <DarkMode />
      </Box>
    </>
  )
}

export default AppBar
