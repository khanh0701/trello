import { Box } from '@mui/material'

function BoardContent() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: 'primary.main',
          width: '100%',
          height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boarBarHeight})`,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        content
      </Box>
    </>
  )
}

export default BoardContent
