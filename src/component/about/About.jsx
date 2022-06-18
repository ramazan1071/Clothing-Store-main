import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import useStyles from './Styles'
import Gallery1 from '../../assets/images/gallery/about-01.jpg'
import Gallery2 from '../../assets/images/gallery/about-02.jpg'

const About = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.background}>
        <h2 className={`title-animation ${classes.title}`}>Hakkında</h2>
      </div>
      <Container className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={9} md={6} style={{ marginBottom: '50px' }}>
                <h4 className={classes.titleSection}>Bizim Hikayemiz</h4>
                <p>
                  Büşra Daş Kahramanmaraş Sütçü İmam Üniversitesi 4.Sınıf Tez
                </p>
              </Grid>
              <Hidden smUp>
                <Grid item xs={12} className={classes.imgSection}>
                  <img
                    src={Gallery1}
                    alt="Gallery1"
                    className={classes.imgStyle}
                  />
                  <div className={classes.backgroundImageXs} />
                </Grid>
              </Hidden>
              <Hidden xsDown>
                <Grid item xs={12} sm={9} md={6} className={classes.imgSection}>
                  <img
                    src={Gallery1}
                    alt="Gallery1"
                    className={classes.imgStyle}
                  />
                  <div className={classes.backgroundImage} />
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
          <Hidden mdUp>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid
                  item
                  xs={12}
                  sm={9}
                  md={6}
                  style={{ marginBottom: '50px' }}
                >
                  <h4 className={classes.titleSection}>Bizim Misyonumuz</h4>
                  <p>
                    Web sitemiz Ksü bilgisayar mühendisliği bölümü bitirme
                    projesi kapsamında giyim sektörü üzerine bir mağaza online
                    platformu niteliğinde hazırlanmıştır. Temelde alışveriş
                    yapacak müşterilere mağazaya gitmeden bu imkan sunmak amaç
                    edinilmiştir. En temel seviyede gezinmeyi ve alışveriş
                    yapmayı sağlayan bir mağazacılık sitesidir. Büşra Daş
                  </p>
                  <div className={classes.textSubSection}>
                    <p>
                      Web sitemiz Ksü bilgisayar mühendisliği bölümü bitirme
                      projesi kapsamında giyim sektörü üzerine bir mağaza online
                      platformu niteliğinde hazırlanmıştır. Temelde alışveriş
                      yapacak müşterilere mağazaya gitmeden bu imkan sunmak amaç
                      edinilmiştir. En temel seviyede gezinmeyi ve alışveriş
                      yapmayı sağlayan bir mağazacılık sitesidir.
                    </p>
                    <h5>- Büşra Daş</h5>
                  </div>
                </Grid>
                <Hidden smUp>
                  <Grid item xs={12} className={classes.imgSection}>
                    <img
                      src={Gallery2}
                      alt="Gallery 2"
                      className={classes.imgStyle}
                    />
                    <div className={classes.backgroundImageXs} />
                  </Grid>
                </Hidden>
                <Hidden xsDown>
                  <Grid
                    item
                    xs={12}
                    sm={9}
                    md={6}
                    className={classes.imgSection}
                  >
                    <img
                      src={Gallery2}
                      alt="Gallery 2"
                      className={classes.imgStyle}
                    />
                    <div className={classes.backgroundImage} />
                  </Grid>
                </Hidden>
              </Grid>
            </Grid>
          </Hidden>
          <Hidden smDown>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Hidden smUp>
                  <Grid item xs={12} className={classes.imgSection}>
                    <img
                      src={Gallery2}
                      alt="Gallery 2"
                      className={classes.imgStyle}
                    />
                    <div className={classes.backgroundImageXs} />
                  </Grid>
                </Hidden>
                <Hidden xsDown>
                  <Grid
                    item
                    xs={12}
                    sm={9}
                    md={6}
                    className={classes.imgSection}
                  >
                    <img
                      src={Gallery2}
                      alt="Gallery 2"
                      className={classes.imgStyle}
                    />
                    <div className={classes.backgroundImage} />
                  </Grid>
                </Hidden>
                <Grid
                  item
                  xs={12}
                  sm={9}
                  md={6}
                  style={{ marginBottom: '50px' }}
                >
                  <h4 className={classes.titleSection}>Görevimiz</h4>
                  <p>
                    Web sitemiz Ksü bilgisayar mühendisliği bölümü bitirme
                    projesi kapsamında giyim sektörü üzerine bir mağaza online
                    platformu niteliğinde hazırlanmıştır. Temelde alışveriş
                    yapacak müşterilere mağazaya gitmeden bu imkan sunmak amaç
                    edinilmiştir. En temel seviyede gezinmeyi ve alışveriş
                    yapmayı sağlayan bir mağazacılık sitesidir. Büşra Daş
                  </p>
                  <div className={classes.textSubSection}>
                    <p>
                      Web sitemiz Ksü bilgisayar mühendisliği bölümü bitirme
                      projesi kapsamında giyim sektörü üzerine bir mağaza online
                      platformu niteliğinde hazırlanmıştır. Temelde alışveriş
                      yapacak müşterilere mağazaya gitmeden bu imkan sunmak amaç
                      edinilmiştir. En temel seviyede gezinmeyi ve alışveriş
                      yapmayı sağlayan bir mağazacılık sitesidir. Büşra Daş
                    </p>
                    <h5>- Büşra Daş</h5>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </>
  )
}

export default About
