import Box from '@mui/material/Box'
import Column from './Column/Column'
import ViewColumnIcon from '@mui/icons-material/ViewColumn'
import { Button } from '@mui/material'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'

function ListColumns({ columns }) {
  return (
    <SortableContext items={columns?.map((item) => item._id)} strategy={horizontalListSortingStrategy}>
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
        {columns?.map((column) => (
          <Column key={column._id} column={column} />
        ))}

        <Box sx={{ maxWidth: '200px', minWidth: '200px', mx: 2, borderRadius: '6px', height: 'fit-content', bgcolor: '#ffffff3d' }}>
          <Button startIcon={<ViewColumnIcon />} sx={{ color: 'white', pl: 2.5, py: 1 }}>
            Add new column
          </Button>
        </Box>
      </Box>
    </SortableContext>
  )
}

export default ListColumns
