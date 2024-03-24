import Box from '@mui/material/Box'
import Card from './Card/Card'

const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'

function ListCards() {
  return (
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
      <Card />
    </Box>
  )
}

export default ListCards
