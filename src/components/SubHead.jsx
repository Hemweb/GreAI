import { Typography } from '@mui/material'

function SubHead({children, color}) {
  return (
    <Typography  sx={{color: color ?? '#282828', fontWeight:'600', fontSize:[14,16]}}>{children}</Typography>
)
}

export default SubHead