import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
import clsx from 'clsx'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import iconPayOne from '../../assets/images/icons/icon-pay-01.png'
import iconPayTwo from '../../assets/images/icons/icon-pay-02.png'
import iconPayThree from '../../assets/images/icons/icon-pay-03.png'
import iconPayFour from '../../assets/images/icons/icon-pay-04.png'
import iconPayFive from '../../assets/images/icons/icon-pay-05.png'
import useStyles from './Styles'

const FooterItem = ({ title }) => {
  const classes = useStyles()

  return (
    <li className={classes.footerItem}>
      <Link href="#/" className={classes.TextColor}>
        {title}
      </Link>
    </li>
  )
}

const Footer = () => {
  const classes = useStyles()

  return (
    <Box className={classes.box}>
      <Container>
        <Grid container spacing={3} className={classes.flexGridRow}>
          <Grid item xs={7} sm={6} md={3}>
            <h4 className={classes.titleTextColor}>KATEGORİLER</h4>
            <ul>
              <FooterItem title="Kadınlar" />
              <FooterItem title="Erkekler" />
              <FooterItem title="Ayakkabılar" />
              <FooterItem title="Saatler" />
            </ul>
          </Grid>
          <Grid item xs={5} sm={6} md={3}>
            <h4 className={classes.titleTextColor}>YARDIM</h4>
            <ul>
              <FooterItem title="Parça siparişi" />
              <FooterItem title="İadeler" />
              <FooterItem title="Nakliye" />
              <FooterItem title="SSS" />
            </ul>
          </Grid>
          <Grid item xs={7} sm={6} md={3}>
            <h4 className={classes.titleTextColor}>İLETİŞİM</h4>
            <p className={classes.TextDifferentColor}>
              Sorusu olan? Üniversitede bize bildiri atabilir , 111 Gaziler,
              Turkey , BSR 11118 yada telefon (+90) 50 111 11 11
            </p>
            <div>
              <IconButton
                className={clsx(classes.TextColor, classes.buttonSpacing)}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton className={classes.TextColor}>
                <InstagramIcon />
              </IconButton>
              <IconButton className={classes.TextColor}>
                <LinkedInIcon />
              </IconButton>
              <IconButton className={classes.TextColor}>
                <TwitterIcon />
              </IconButton>
            </div>
          </Grid>
          <Hidden smDown>
            <Grid item xs={5} sm={6} md={3}>
              <h4 className={classes.titleTextColor}>BÜLTEN</h4>
              <TextField
                label="Email"
                InputLabelProps={{
                  style: { color: '#b2b2b2' },
                }}
                inputProps={{
                  style: {
                    color: '#b2b2b2',
                  },
                }}
                fullWidth
                placeholder="email@example.com"
              />
              <Button
                className={classes.buttonStyle}
                fullWidth
                variant="contained"
                color="primary"
              >
                Abone olmak
              </Button>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid item xs={5} sm={6} md={3}>
              <h4 className={classes.titleTextColor}>BÜLTEN</h4>
              <TextField
                label="Email"
                InputLabelProps={{
                  style: { color: '#b2b2b2' },
                }}
                inputProps={{
                  style: {
                    color: '#b2b2b2',
                  },
                }}
                fullWidth
                placeholder="email@example.com"
              />
              <Button
                className={clsx(
                  classes.buttonStyle,
                  classes.buttonResponsiveStyle
                )}
                fullWidth
                variant="contained"
                color="primary"
              >
                Abone olmak
              </Button>
            </Grid>
          </Hidden>
        </Grid>
        <Grid container className={classes.flexIconPay}>
          <Grid item>
            <img src={iconPayOne} alt="Icon Pay One" />
            <img src={iconPayTwo} alt="Icon Pay Two" />
            <img src={iconPayThree} alt="Icon Pay Three" />
            <img src={iconPayFour} alt="Icon Pay Four" />
            <img src={iconPayFive} alt="Icon Pay Five" />
          </Grid>
          <Grid
            item
            xs={12}
            className={classes.TextDifferentColor}
            style={{ textAlign: 'center', paddingTop: '20px' }}
          >
            Telif Hakkı ©2022 Tüm hakları Saklıdır | Geliştirici
            <span className={classes.spanColor}>Büşra Daş</span>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
