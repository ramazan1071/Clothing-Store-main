import React from 'react'
import Container from '@material-ui/core/Container'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import useStyles from './Styles'

const AccordionComponent = (data) => {
  const classes = useStyles()
  const { title } = data

  return (
    <Accordion className={classes.accordionStyle}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Büşra Daş 18110131302 4.sınıf Bitirme Çalışması Ödevi
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}

const Help = () => {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <h2>Herhangi bir sorunuz varsa?</h2>
      <div className={classes.root}>
        <AccordionComponent title="Eşyalarım nerede?" />
        <AccordionComponent title="Siparişlerinizi Yönetme" />
        <AccordionComponent title="Hesap Ayarları ve Ödeme" />
        <AccordionComponent title="İadeler ve geri ödemeler" />
        <AccordionComponent title="Kargo Politikaları" />
        <AccordionComponent title="Cihazları" />
        <AccordionComponent title="Dijital Hizmetler ve İçerik" />
        <AccordionComponent title="İşletme Hesapları" />
        <AccordionComponent title="Diğer Konular ve Yardım Siteleri" />
        <AccordionComponent title="Daha Fazla Yardıma İhtiyacınız Var?" />
      </div>
    </Container>
  )
}

export default Help
