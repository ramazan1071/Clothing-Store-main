import React from 'react'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Title from './Title'

const preventDefault = (event) => {
  event.preventDefault()
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
})

const Deposits = () => {
  const classes = useStyles()
  const account = JSON.parse(localStorage.getItem('Account'))

  return (
    <>
      <Title>Son Mevduat</Title>
      <Typography component="p" variant="h4">
        {account[0].deposit}.00 TL
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        15 Şubat, 2022
      </Typography>
      <div>
        <Link color="primary" href="/#" onClick={preventDefault}>
          Bakiyeyi Görüntüle
        </Link>
      </div>
    </>
  )
}

export default Deposits
