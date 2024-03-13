import { Box } from '@mui/material'

function BoardBar() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: 'primary.dark',
          width: '100%',
          height: (theme) => theme.trello.boarBarHeight,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        board bar
      </Box>
    </>
  )
}

export default BoardBar
