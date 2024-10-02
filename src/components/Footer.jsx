import { Stack, Typography } from '@mui/material'

function Footer() {
  return (
    <Stack sx={{
        bgcolor:'#fff',
        width:'100%',
        position:'fixed',
        bottom:'0',
        py:[2],
        px:[5]
    }}>
        <Typography variant='body2'>
            Powered by GBI Technologies
        </Typography>
    </Stack>
  )
}

export default Footer