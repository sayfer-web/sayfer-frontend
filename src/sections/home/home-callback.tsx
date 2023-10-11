// import { Textarea } from "@mui/joy"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"
import { m } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Iconify from "src/components/iconify"
import { useLocales } from "src/locales"
// import Textarea from '@mui/joy/Textarea';
// import { } from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import Box from '@mui/joy/Box';
// import Textarea from '@mui/joy/Textarea';
import { Textarea } from '@mui/joy';


const USER_REGEX = /^[a-zA-Zа-яА-Я ]+$/
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const PHONE_REGEX = /^(?:\+)?\d{1,}$/
const INVEST_REGEX = /^\d{1,}$/
const MESSAGE_REGEX = /^[a-zA-Zа-яА-Я0-9 .,!?-]{1,1000}$/

export const HomeCallback = () => {

  const { t } = useLocales()

  const [fieldName, setFieldName] = useState('')
  const [isValidName, setIsValidName] = useState(false)
  const [isFocusNameField, setIsFocusNameField] = useState(false)

  const [fieldEmail, setFieldEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [isFocusEmailField, setIsFocusEmailField] = useState(false)

  const [fieldPhone, setFieldPhone] = useState('')
  const [isValidPhone, setIsValidPhone] = useState(false)
  const [isFocusPhoneField, setIsFocusPhoneField] = useState(false)

  const [fieldInvest, setFieldInvest] = useState('')
  const [isValidInvest, setIsValidInvest] = useState(false)
  const [isFocusInvestField, setIsFocusInvestField] = useState(false)

  const [fieldMessage, setFieldMessage] = useState('')
  const [isValidMessage, setIsValidMessage] = useState(false)
  const [isFocusMessageField, setIsFocusMessageField] = useState(false)


  const refName = useRef(null)


  useEffect(() => {
    const isUserCorrect = USER_REGEX.test(fieldName) || fieldName === '' && true
    if (isUserCorrect) setIsValidName(true)
    else setIsValidName(false)
  }, [fieldName])

  useEffect(() => {
    const isEmailCorrect = EMAIL_REGEX.test(fieldEmail) || fieldEmail === '' && true
    if (isEmailCorrect) setIsValidEmail(true)
    else setIsValidEmail(false)
  }, [fieldEmail])

  useEffect(() => {
    const isPhoneCorrect = PHONE_REGEX.test(fieldPhone) || fieldPhone === '' && true
    if (isPhoneCorrect) setIsValidPhone(true)
    else setIsValidPhone(false)
    // console.log(isPhoneCorrect)
  }, [fieldPhone])

  useEffect(() => {
    const isInvestCorrect = INVEST_REGEX.test(fieldInvest) || fieldInvest === '' && true
    if (isInvestCorrect) setIsValidInvest(true)
    else setIsValidInvest(false)
    // console.log(isInvestCorrect)
  }, [fieldInvest])

  useEffect(() => {
    const isMessageCorrect = MESSAGE_REGEX.test(fieldMessage) || fieldMessage === '' && true
    if (isMessageCorrect) setIsValidMessage(true)
    else setIsValidMessage(false)
    // console.log(isInvestCorrect)
  }, [fieldMessage])


  return (
    <section
      style={{ boxShadow: 'inset 0 5px 10px rgba(0, 255, 0, 0.2), 0 -5px 10px rgba(0, 255, 0, 0.2)', background: '#002102', flex: 1, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: 20, paddingTop: 48, paddingBottom: 48, padding: 12 }} className="py-12 px-4 gap-8">
        <m.div>
          <Typography variant="h4" sx={{ paddingTop: 2, paddingBottom: 2 }}>{t('callback_title')}</Typography>
        </m.div>
      {/* <h1 style={{ fontSize: 28, fontWeight: '500', color: '#fff', textAlign: 'center', fontStyle: 'initial' }}
        className="text-3xl pb-2 px-5"></h1> */}
      {/* <h2 style={{ fontSize: 24, fontWeight: '300', color: '#fff'}}></h2> */}

      <Stack
      sx={{ display: 'flex', gap: 2, flexDirection: 'column', width: {
        mobile: '100%',
        md: 600
      }, paddingLeft: 2, paddingRight: 2, justifyItems: 'center', alignItems: 'center', minWidth: 400 }}
    >

      <form style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 20}}>



        <Stack
          className="flex w-full gap-8 flex-col lg:flex-row" 
          /* @ts-ignore */ 
          sx={{    
          display: 'flex',
          flex: 1,
          width: '100%', 
          flexDirection: {
            mobile: 'column',
            sm: 'row'
          },
          alignItems: 'center',
          gap: 2
          }}>

          <div className="flex flex-col gap-2 w-full"
          style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', gap: 4, flex: 1, width: '100%' }}
          >

            <TextField 
                ref={refName}
                value={fieldName}
                onChange={(value) => setFieldName(value.target.value)}
                onFocus={() => setIsFocusNameField(true)}
                onBlur={() => setIsFocusNameField(false)}
              id="outlined-basic" 
              label={t('name')} 
              variant="outlined" 
              // InputLabelProps={{ shrink: true }}
              helperText={isValidName ? '' : 'Введены некорректные данные' }
            />
            {/* <label 
            className="text-white text-xl font-medium" 
            style={{ color: 'white', fontSize: 20}}
            htmlFor="name">Имя</label>
            <div style={{ borderRadius: 10, borderWidth: 2, borderColor: isValidName ? '#0f0' : '#f00', boxShadow: isValidName ? isFocusNameField ? '0px 0px 12px #0f0' : '0px 0px 6px #0f0' : '0px 0px 6px #f00', display: 'flex', flex: 1, position: 'relative', backgroundColor: '#001102', color: '#fff' }}
            >
              <input
                ref={refName}
                value={fieldName}
                onChange={(value) => setFieldName(value.target.value)}
                onFocus={() => setIsFocusNameField(true)}
                onBlur={() => setIsFocusNameField(false)}
                style={styles.input}
                className="bg-transparent focus:text-white h-14 flex-1 flex pl-6 text-xl autofill:bg-transparent" type="text" id="name" placeholder="Андрей Викторович" />
              {isValidName ? '' : <p style={{ color: '#fc503d', position: 'absolute', left: 0, bottom: -45, fontSize: 16  }}>Введены некорректные данные.</p>}
            </div> */}
          </div>

          <div className="flex flex-col gap-2 w-full" 
          style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', gap: 4, flex: 1, width: '100%' }}
          >
            <TextField 
              value={fieldPhone}
              onChange={(value) => setFieldPhone(value.target.value)}
              onFocus={() => setIsFocusPhoneField(true)}
              onBlur={() => setIsFocusPhoneField(false)}
              id="outlined-basic" 
              label={t('phone_number')} 
              variant="outlined"
              // InputLabelProps={{ shrink: true }} 
              helperText={ isValidPhone ? '' : 'Введите корректный номер телефона' }
            
            />
            {/* <label className="text-white text-xl font-medium"
            style={styles.inputLabel} htmlFor="name">
              Номер
            </label>


            <div style={{ borderRadius: 10, borderWidth: 2, borderColor: isValidPhone ? '#0f0' : '#f00', boxShadow: isValidPhone ? isFocusPhoneField ? '0px 0px 12px #0f0' : '0px 0px 6px #0f0' : '0px 0px 6px #f00', display: 'flex', flex: 1, position: 'relative', color: "#fff", backgroundColor: '#001102' }}
              // className={`bg-[#001102]`}
              
            >
              <input
                value={fieldPhone}
                onChange={(value) => setFieldPhone(value.target.value)}
                onFocus={() => setIsFocusPhoneField(true)}
                onBlur={() => setIsFocusPhoneField(false)}
                style={styles.input}
                className={`bg-transparent focus:text-white h-14 flex-1 pl-6 text-xl autofill:bg-none autofill:border-hidden" type="text" id="name" placeholder="+0999999" ${isValidPhone}`} />
              {isValidPhone ? '' : <p style={{ color: '#fc503d', position: 'absolute', left: 0, bottom: -45, fontSize: 16 }}>Введите корректный номер телефона</p>}
            </div> */}
          </div>



        </Stack>

        <div className="flex gap-8 w-full justify-center flex-col lg:flex-row"
        style={{ display: 'flex', flexDirection: 'column', gap: 20, justifyItems: 'center', width: '100%' }}
        >

          <div className="flex flex-col gap-2 w-full"
          style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', gap: 4, flex: 1, width: '100%' }}
          >
            <TextField 
              value={fieldEmail}
              onChange={(value) => setFieldEmail(value.target.value)}
              onFocus={() => setIsFocusEmailField(true)}
              onBlur={() => setIsFocusEmailField(false)}
              id="outlined-basic" 
              label={t('email')} 
              variant="outlined" 
              // InputLabelProps={{ shrink: true }}
              helperText={isValidEmail ? '' : 'Введите корректный адрес электронной почты' }
            
            />
            {/* <label 
              className="text-white text-xl font-medium" 
              style={styles.inputLabel}
              htmlFor="name">Электронная почта</label>
            <div style={{ borderRadius: 10, borderWidth: 2, borderColor: isValidEmail ? '#0f0' : '#f00', boxShadow: isValidEmail ? isFocusEmailField ? '0px 0px 12px #0f0' : '0px 0px 6px #0f0' : '0px 0px 6px #f00', display: 'flex', flex: 1, position: 'relative', backgroundColor: '#001102', color: '#fff' }}
            >
              <input
                value={fieldEmail}
                onChange={(value) => setFieldEmail(value.target.value)}
                onFocus={() => setIsFocusEmailField(true)}
                onBlur={() => setIsFocusEmailField(false)}
                style={styles.input}
                className="bg-transparent focus:text-white h-14 flex-1 pl-6 text-xl" type="email" id="name" placeholder="mail@gmail.com" />
              {isValidEmail ? '' : <p style={{ color: '#fc503d', position: 'absolute', left: 0, bottom: -45, fontSize: 16 }}>Введите корректный адрес электронной почты</p>}
            </div> */}
          </div>

          <div className="flex flex-col gap-2 w-full" 
          // style={styles.inputOutsideBox}
          style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', gap: 4, flex: 1 }}
          >
            <TextField 
              value={fieldInvest}
              onChange={(value) => setFieldInvest(value.target.value)}
              onFocus={() => setIsFocusInvestField(true)}
              onBlur={() => setIsFocusInvestField(false)}
              id="outlined-basic" 
              label={t('invest_value')} 
              variant="outlined" 
              // InputLabelProps={{ shrink: true }}
              helperText={isValidInvest ? '' : 'Введите числовое значение от 1 и более'}

            />


            {/* <label className="text-white text-xl font-medium" htmlFor="name">Сумма инвестирования</label>
            <div style={{ borderRadius: 10, borderWidth: 2, borderColor: isValidInvest ? '#0f0' : '#f00', boxShadow: isValidInvest ? isFocusInvestField ? '0px 0px 12px #0f0' : '0px 0px 6px #0f0' : '0px 0px 6px #f00', display: 'flex', flex: 1, position: 'relative', backgroundColor: '#001102', color: '#fff' }}
            >
              <input
                value={fieldInvest}
                onChange={(value) => setFieldInvest(value.target.value)}
                onFocus={() => setIsFocusInvestField(true)}
                onBlur={() => setIsFocusInvestField(false)}
                style={styles.input}
                className="bg-transparent focus:text-white h-14 flex-1 pl-6 text-xl" type="email" id="name" placeholder="100000" />
            </div> */}
          </div>

        </div>

        <div className="flex gap-4 w-full justify-center"
        style={{ display: 'flex', gap: 20, justifyItems: 'center', width: '100%'}}
        >

          <div className="flex flex-col gap-2 w-full"
          style={{ display: 'flex', flexDirection: 'column', gap: 10, justifyItems: 'center', width: '100%'}}
          >
                <TextField fullWidth multiline rows={4} label={t('cover_letter')} />
                {/* <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
      <Textarea size="sm" name="Size" placeholder="Small" />
      <Textarea size="md" name="Size" placeholder="Medium" />
      <Textarea size="lg" name="Size" placeholder="Large" />
    </Box> */}
            {/* <Textarea size="lg" name="Size" placeholder="Large" /> */}
            {/* <Textarea /> */}
            {/* <label className="text-white text-xl font-medium" htmlFor="name">Сопроводительное письмо</label>
            <div style={{ borderRadius: 10, borderWidth: 2, borderColor: isValidMessage ? '#0f0' : '#f00', boxShadow: isValidMessage ? isFocusMessageField ? '0px 0px 15px #0f0' : '0px 0px 6px #0f0' : '0px 0px 6px #f00', display: 'flex', flex: 1, position: 'relative', backgroundColor: '#001102', color: '#fff' }}
            >
              <textarea
                value={fieldMessage}
                onChange={(value) => setFieldMessage(value.target.value)}
                onFocus={() => setIsFocusMessageField(true)}
                onBlur={() => setIsFocusMessageField(false)}
                style={styles.inputArea}
                className="bg-transparent focus:text-white h-14 flex-1 pl-6 pr-6 pt-4 pb-4 text-xl min-h-[200px] focus:outline-none" id="name" placeholder="Доброго времени суток. Меня зовут Андрей и я предприниматель. В свободное время суток увлекаюсь карточными играми: покером и другими. К сожалению, я нашел ответы не на все свои вопросы в информационном разделе сайта, мне требуется дополнительная консультация" />
              {isValidMessage ? '' : <p style={{ color: '#fc503d', position: 'absolute', left: 0, bottom: -55, fontSize: 16 }}>Текст должен состоять из латинских или кириллических символов, цифр, восклицательного, вопросительного знаков, точки и запятой. <br /> Максимальная длина сообщения - 1000 символов</p>}
            </div> */}
          </div>

        </div>

        {/* <button
          style={{ marginTop: 20, borderRadius: 10, borderWidth: 2, borderColor: '#0f0', boxShadow: '0px 0px 6px #0f0', padding: 2, height: 56, paddingLeft: 20, paddingRight: 20, color: '#fff' }}
          className="hover:bg-emerald-900 bg-['#0f0'] text-2xl"
          onClick={() => { }} disabled>Записаться</button> */}

          <m.div style={{ display: 'flex', justifyContent: 'center'}}>
        <Button
          color="inherit"
          size="large"
          variant="outlined"
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
          target="_blank"
          rel="noopener"
          href='/'
        >
          
          {t('send')}
        </Button>

        </m.div>

      </form>


      </Stack>


    </section>
  )
}

const styles = {
  inputOutsideBox: { 
    display: 'flex', 
    flex: 1,
    width: '100%', 
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20
  },
  inputMiddleBox: {
    display: 'flex', 
    flexDirection: 'column',
    justifyItems: 'center', 
    gap: 4, 
    width: '100%'
  },
  input: {
    backgroundColor: '#00000000', 
    color: '#fff', 
    outline: 'none', // Убираем границу при фокусе
    border: 'none', // Убираем обычную границу
    padding: 8,
    paddingLeft: 10,
    paddingRight: 10
  },
  inputArea: {
    backgroundColor: '#00000000', 
    color: '#fff', 
    outline: 'none', // Убираем границу при фокусе
    border: 'none', // Убираем обычную границу
    padding: 8,
    paddingLeft: 10,
    paddingRight: 10,
    height: 150,
    // width: '100%'
    flex: 1
  },
  inputLabel: {
    color: 'white', 
    fontSize: 20
  },
}