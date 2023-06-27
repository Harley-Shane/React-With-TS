import React from 'react'
import { Box } from '@mui/material'

export const MUILayout = () => {
  return (
    <Box sx={{
        backgroundColor:'#a2d093',
        color: 'white',
        height: '100px',
        width: '100px',
        padding:'16px',
        '&:hover': {
            backgroundcolor: 'primary.light',
        },
    }}>
        
    </Box>
  )
}
