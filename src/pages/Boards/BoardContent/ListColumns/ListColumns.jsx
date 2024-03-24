import Box from '@mui/material/Box'
import Column from './Column/Column'
import ViewColumnIcon from '@mui/icons-material/ViewColumn'
import { Button } from '@mui/material'

function ListColumns() {
  return (
    <Box
      sx={{
        bgcolor: 'inherit',
        width: '100%',
        height: '100%',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        '*::-webkit-scrollbar-track': {
          m: 2,
        },
      }}
    >
      <Column />
      <Column />
      <Box sx={{ width: '200px', mx: 2, borderRadius: '6px', height: 'fit-content', bgcolor: '#ffffff3d' }}>
        <Button startIcon={<ViewColumnIcon />} sx={{ color: 'white', pl: 2.5, py: 1 }}>
          Add new column
        </Button>
      </Box>
    </Box>
  )
}

export default ListColumns
