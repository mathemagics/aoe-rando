import React from 'react'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default ({image, name}) => {
  return (
    <Stack spacing={1}>
    <img
        src={image}
        alt={name}
        style={{ height: 300, width: 300, marginTop: 24 }}
      />
      <Typography>
        {name}
      </Typography>
    </Stack>
  )
}