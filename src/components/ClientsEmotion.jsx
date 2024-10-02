import { Stack } from '@mui/material'
import React from 'react'
import MoodBadTwoToneIcon from '@mui/icons-material/MoodBadTwoTone';
import SentimentDissatisfiedTwoToneIcon from '@mui/icons-material/SentimentDissatisfiedTwoTone';
import SentimentNeutralTwoToneIcon from '@mui/icons-material/SentimentNeutralTwoTone';
import SentimentSatisfiedAltTwoToneIcon from '@mui/icons-material/SentimentSatisfiedAltTwoTone';
import SentimentVerySatisfiedTwoToneIcon from '@mui/icons-material/SentimentVerySatisfiedTwoTone';

function ClientsEmotion({value}) {
    const data = [
        {
            rate: 1,
            Icon: MoodBadTwoToneIcon,
            color: '#d1503f'
        },
        {
            rate: 2,
            Icon: SentimentDissatisfiedTwoToneIcon,
            color: '#e87b33'
        },
        {
            rate: 3,
            Icon: SentimentNeutralTwoToneIcon,
            color: '#dbad4b'
        },
        {
            rate: 4,
            Icon: SentimentSatisfiedAltTwoToneIcon,
            color: '#85cca2'
        },
        {
            rate: 5,
            Icon: SentimentVerySatisfiedTwoToneIcon,
            color: '#3d8f4e'
        },
    ]
  return (
    <Stack sx={{
        width:'fit-content',
        gap:[1]
    }}>
       <Stack direction='row' gap={2}>
       {
            data.map((item, index) => (
                <item.Icon key={index} sx={{ color : item.color, opacity: value === item.rate ? 1 : .5 }} />
            ))
        }
       </Stack>
       <Stack direction='row' sx={{width:'100%'}}>
       {
            data.map((item, index) => (
                <Stack key={index} sx={{ width:'20%',height:'3px',bgcolor : item.color, }} />
            ))
        }
       </Stack>
    </Stack>
)
}

export default ClientsEmotion