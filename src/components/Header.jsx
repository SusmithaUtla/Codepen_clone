import React from 'react'

import {AppBar,Toolbar,styled} from '@mui/material'

const Container=styled(AppBar)`
  background:#060606;
  height:9vh;
`

export default function Header() {
    const logo='data:image/png;base64,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'
  return (
    <Container position='static'>
        <Toolbar> 
           <img src={logo} alt='logo' style={{width:47,height:47,paddingRight:20}}/>
        </Toolbar>
    </Container>
  )
}
