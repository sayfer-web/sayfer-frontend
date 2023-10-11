// import IconDollar from 'src/assets/icons/home/advantages/IconDollar'
// import IconEye from 'src/assets/icons/home/advantages/IconEye'
// import IconSafety from '../../../assets/icons/home/advantages/IconSafety'
// import { useInView } from 'react-intersection-observer'

import wave from "src/assets/images/background/wave.png";
import { Link } from 'react-router-dom';
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { m } from "framer-motion";
import Typography from '@mui/material/Typography';
import { useLocales } from "src/locales";


const advantages = () => {

  const { t } = useLocales()

  return [
  {
    id: 1,
    title: t('first_advantage'),
    // icon: <IconDollar color='#00ff00' />,
    link: '/',
  },
  {
    id: 2,
    title: t('second_advantage'),
    // icon: <IconEye color='#00ff00' />,
    link: '/',
  },
  {
    id: 3,
    title: t('third_advantage'),
    // icon: <IconSafety color='#00ff00' />,
    link: '/',
  },
  {
    id: 4,
    title: t('fourth_advantage'),
    // icon: <IconSafety color='#00ff00' />,
    link: '/',
  },
  {
    id: 5,
    title: t('fifth_advantage'),
    // icon: <IconSafety color='#00ff00' />,
    link: '/',
  },
  {
    id: 6,
    title: t('sixth_advantage'),
    // icon: <IconSafety color='#00ff00' />,
    link: '/',
  },
]
}



export const HomeAdvantages = () => { 
  
  const { t } = useLocales()
  /* const [ref, inView] = useInView({*/ /*   triggerOnce: false, // Анимация произойдет только один раз*/ /*   threshold: 0.1, // Порог видимости элемента*/ /* });*/ return (
  <div style={{ backgroundColor: '#000', paddingTop: 20, paddingBottom: 20, position: 'relative' }}>
    {/*
              <div style={{ position: 'absolute', width: screen.width }}>
                <img src={wave} width='100%' height={40} />
                <div style={{ height: 80, backgroundColor: '#000', position: 'absolute', left: 0, width: '100%' }}></div>
              </div> */}


    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>

      <Stack spacing={3} sx={{ textAlign: 'center' }}>
        {/* <m.div 
        // variants={varFade().inDown}
        >
          <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
            
          </Typography>
        </m.div> */}

        <m.div 
        // variants={varFade().inDown}
        >
          <Typography variant="h3" sx={{ height: 80 }}> Главные преимущества </Typography>
        </m.div>

        {/* <m.div 
        // variants={varFade().inDown}
        >
          <Typography sx={{ color: 'text.secondary' }}>
            Изучите подробнее
          </Typography>
        </m.div> */}
      </Stack>
      {/* <div>
        <p style={{ color: '#fff', display: 'flex', justifyContent: 'center', fontSize: 28, paddingLeft: 20, paddingRight: 20, textAlign: 'center' }}>Основные преимущества нашего сервиса</p>
      </div> */}

      <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column', gap: 10, justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 4, paddingLeft: 10, paddingRight: 10, justifyContent: 'center' }}>

          {advantages().map((adv, idx) => (
            
            <m.div key={adv.id} style={{ borderWidth: 2, borderRadius: 15, borderColor: '#0f0', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0px 0px 10px #0f0', color: '#fff', flexDirection: 'column', backgroundColor: '#cccccc11', position: 'relative', gap: 10, paddingLeft: 10, paddingRight: 10, minWidth: 250, maxWidth: 350, height: 250 }}>
              <span style={{ position: "absolute", fontSize: 300, fontWeight: '800', color: '#ffffff11', right: 0 }}>{idx + 1}</span>
              {/* <div className="h-[110px] flex items-end">{adv.icon}</div> */}
              <m.div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: "center", paddingLeft: 20, paddingRight: 20, fontSize: 20, fontWeight: '300', textAlign: "center" }}>{adv.title}</m.div>
              <m.div style={{ height: 60 }}>
                <Link style={{ color: '#fff' }} to={adv.link}>{t('details')} »</Link>
              </m.div>
              {/* <Box
                sx={{
                  width: 300,
                  height: 300,
                  // backgroundColor: 'primary.dark',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              /> */}
            </m.div>
          ))}
        </Box>

        <m.div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
          <button style={{ backgroundColor: 'rgb(204,255,204, 0.05)', padding: 15, paddingLeft: 20, paddingRight: 20, borderRadius: 25, fontSize: 22, boxShadow: '0px 0px 10px #0f0', borderColor: '#0f0', borderWidth: 2, color: '#fff' }}>{t('all_advantages')}</button>
        </m.div>

      </Box>

    </div>

  </div>

)}
