import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import clsx from 'clsx'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import CallOutlinedIcon from '@material-ui/icons/CallOutlined'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined'
import useStyles from './Styles'

const Contact = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.background}>
        <h2 className={`title-animation ${classes.title}`}>İletişim</h2>
      </div>
      <Container className={classes.container}>
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            md={6}
            className={clsx(classes.sectionStyle, classes.firstSectionStyle)}
          >
            <Grid item xs={9} className={classes.firstSection}>
              <h3 className={classes.titleSection}>Bize mesaj gönder</h3>
              <TextField
                className={classes.objectSubSection}
                id="outlined-textarea"
                label="E-posta Adresiniz"
                placeholder="email@example.com"
                multiline
                fullWidth
                variant="outlined"
              />
              <TextField
                className={classes.objectSubSection}
                id="outlined-textarea"
                label="Nasıl yardımcı olabiliriz?"
                placeholder="Fikrinizi veya sorununuzu bizim için yazın"
                multiline
                rows={5}
                fullWidth
                variant="outlined"
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                className={classes.buttonSubSection}
                style={{ borderRadius: '25px' }}
              >
                Göndermek
              </Button>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className={clsx(classes.sectionStyle, classes.secondSection)}
          >
            <Grid className={classes.secondSubSection}>
              <LocationOnOutlinedIcon />
              <Grid className={classes.flexSubSection}>
                <h4 className={classes.titleSubSection}>Adres</h4>
                <p>
                  Busra Kahramanmaras Sutcu Uni address is 111 Gazi Ave N,
                  Gaziler 11111, WA.
                </p>
              </Grid>
            </Grid>
            <Grid className={classes.secondSubSection}>
              <CallOutlinedIcon />
              <Grid className={classes.flexSubSection}>
                <h4 className={classes.titleSubSection}>Hadi Konuşalım</h4>
                <p className={classes.textSubSection}>+90 1234567891</p>
              </Grid>
            </Grid>
            <Grid className={classes.secondSubSection}>
              <EmailOutlinedIcon />
              <Grid className={classes.flexSubSection}>
                <h4 className={classes.titleSubSection}>Satış Desteği</h4>
                <p className={classes.textSubSection}>bsr@busra.com</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Contact
