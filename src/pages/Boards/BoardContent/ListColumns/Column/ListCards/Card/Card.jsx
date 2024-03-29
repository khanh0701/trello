import React from 'react'
import { Card as MuiCard } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import robot from '~/assets/robot.jpeg'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'

import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

function Card() {
  return (
    <>
      <MuiCard sx={{ cursor: 'pointer', boxShadow: '0 1px 1px  rgba(0, 0, 0, 0.2)', overflow: 'unset' }}>
        <CardMedia sx={{ height: 140 }} image={robot} title="img" />
        <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
          <Typography>Mr. K Dev</Typography>
        </CardContent>
        <CardActions sx={{ p: '0 4px 8px 4px' }}>
          <Button size="small" startIcon={<GroupIcon />}>
            20
          </Button>
          <Button size="small" startIcon={<CommentIcon />}>
            20
          </Button>
          <Button size="small" startIcon={<AttachmentIcon />}>
            20
          </Button>
        </CardActions>
      </MuiCard>

      <MuiCard sx={{ cursor: 'pointer', boxShadow: '0 1px 1px  rgba(0, 0, 0, 0.2)', overflow: 'unset' }}>
        <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
          <Typography>Carc 1</Typography>
        </CardContent>
      </MuiCard>
    </>
  )
}

export default Card
