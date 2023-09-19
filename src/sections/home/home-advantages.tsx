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


const advantages = [
  {
    id: 1,
    title: 'Владельцы токена получают комиссию с каждой раздачи на всех столах',
    // icon: <IconDollar color='#00ff00' />,
    link: '/',
  },
  {
    id: 2,
    title: 'Удобная работа с криптовалютными операциями прямо на сайте',
    // icon: <IconEye color='#00ff00' />,
    link: '/',
  },
  {
    id: 3,
    title: 'Ваши средства в безопасности. Соблюдайте цифровую гигиену',
    // icon: <IconSafety color='#00ff00' />,
    link: '/',
  },
  {
    id: 4,
    title: 'Ваши средства в безопасности. Соблюдайте цифровую гигиену',
    // icon: <IconSafety color='#00ff00' />,
    link: '/',
  },
  {
    id: 5,
    title: 'Ваши средства в безопасности. Соблюдайте цифровую гигиену',
    // icon: <IconSafety color='#00ff00' />,
    link: '/',
  },
  {
    id: 6,
    title: 'Ваши средства в безопасности. Соблюдайте цифровую гигиену',
    // icon: <IconSafety color='#00ff00' />,
    link: '/',
  },
]



export const HomeAdvantages = () => /* const [ref, inView] = useInView({*/ /*   triggerOnce: false, // Анимация произойдет только один раз*/ /*   threshold: 0.1, // Порог видимости элемента*/ /* });*/ (
  <div style={{ backgroundColor: '#000', paddingTop: 20, paddingBottom: 20, position: 'relative' }}>
    {/*
              <div style={{ position: 'absolute', width: screen.width }}>
                <img src={wave} width='100%' height={40} />
                <div style={{ height: 80, backgroundColor: '#000', position: 'absolute', left: 0, width: '100%' }}></div>
              </div> */}


    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

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
          <Typography variant="h2"> Главные преимущества </Typography>
        </m.div>

        <m.div 
        // variants={varFade().inDown}
        >
          <Typography sx={{ color: 'text.secondary' }}>
            Изучите подробнее
          </Typography>
        </m.div>
      </Stack>
      {/* <div>
        <p style={{ color: '#fff', display: 'flex', justifyContent: 'center', fontSize: 28, paddingLeft: 20, paddingRight: 20, textAlign: 'center' }}>Основные преимущества нашего сервиса</p>
      </div> */}

      <div style={{ display: 'flex', flex: 1, flexDirection: 'column', gap: 40, justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 40, paddingLeft: 40, paddingRight: 40, justifyContent: 'center' }}>

          {advantages.map((adv, idx) => (
            <div key={adv.id} style={{ borderWidth: 2, borderRadius: 15, borderColor: '#0f0', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0px 0px 10px #0f0', color: '#fff', flexDirection: 'column', backgroundColor: '#cccccc11', position: 'relative', gap: 10, paddingLeft: 10, paddingRight: 10, minWidth: 250, maxWidth: 450, height: 250 }}>
              <span style={{ position: "absolute", fontSize: 300, fontWeight: '800', color: '#ffffff11', right: 0 }}>{idx + 1}</span>
              {/* <div className="h-[110px] flex items-end">{adv.icon}</div> */}
              <div>{adv.title}</div>
              <p>
                <Link to={adv.link}>Подробнее »</Link>
              </p>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button style={{ backgroundColor: 'rgb(204,255,204, 0.05)', padding: 10, paddingLeft: 20, paddingRight: 20, borderRadius: 25, fontSize: 22, boxShadow: '0px 0px 10px #0f0', borderColor: '#0f0', borderWidth: 2, color: '#fff' }}>Все преимущества</button>
        </div>

      </div>

    </div>

  </div>

)
