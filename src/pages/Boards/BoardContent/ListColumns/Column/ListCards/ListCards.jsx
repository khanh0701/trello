import Box from '@mui/material/Box'
import Card from './Card/Card'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'

function ListCards({ cards }) {
  return (
    <SortableContext items={cards?.map((item) => item._id)} strategy={verticalListSortingStrategy}>
      <Box
        sx={{
          p: '0 5px',
          m: '0 5px',
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          overflowX: 'hidden',
          overflowY: 'auto',
          maxHeight: (theme) => `calc(${theme.trello.boarContentHeight} - ${theme.spacing(5)} - ${COLUMN_FOOTER_HEIGHT} -  ${COLUMN_HEADER_HEIGHT})`,
          '&::-webkit-scrollbar-thumb': {
            background: '#ced0da',
            borderRadius: '8px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#bfc2cf',
          },
        }}
      >
        {cards?.map((card) => (
          <Card key={card._id} card={card} />
        ))}
      </Box>
    </SortableContext>
  )
}

export default ListCards
