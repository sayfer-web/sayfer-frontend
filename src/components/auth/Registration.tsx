import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useRegistrationMutation } from "src/app/features/registration/registrationApiSlice"
import { useDispatch } from "react-redux"
import { setCredentials } from "src/app/features/auth/authSlice"
import { useLoginMutation } from "src/app/features/auth/authApiSlice"

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/

export const Registration = () => {

  const navigate = useNavigate()

  const userRef = useRef(null)
  const dispatch = useDispatch()

  // const isLoadingLogin =  false

  const [registration, { isLoading: isLoadingRegistration }] = useRegistrationMutation()
  const [login, { isLoading: isLoadingLogin }] = useLoginMutation()
  // const errRef = useRef(null)

  const [user, setUser] = useState('')
  const [validUser, setValidUser] = useState(false)
  const [focusUser, setFocusUser] = useState(false)

  const [pwd, setPwd] = useState('')
  const [validPwd, setValidPwd] = useState(false)
  const [pwdFocus, setPwdFocus] = useState(false)

  const [matchPwd, setMatchPwd] = useState('')
  const [validMatch, setValidMatch] = useState(false)
  const [matchFocus, setMatchFocus] = useState(false)

  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    /* @ts-ignore */
    userRef.current.focus()
  }, [])

  useEffect(() => {
    const result = USER_REGEX.test(user)
    setValidUser(result)
  }, [user])

  useEffect(() => {
    const result = PWD_REGEX.test(pwd)
    setValidPwd(result)
    const match = pwd === matchPwd
    setValidMatch(match)
  }, [pwd, matchPwd])

  useEffect(() => {
    setErrMsg('')
  }, [user, pwd, matchPwd])

  const handleSubmitReg = async (e: any) => {
    e.preventDefault()
    const v1 = USER_REGEX.test(user)
    const v2 = PWD_REGEX.test(pwd)
    if (!v1 || !v2) {
      setErrMsg('Введены невереные данные')
      return
    }
    setSuccess(true)
    setErrMsg('RESULT')

    let regResult = ''
    try {

      //   const body = new FormData(e.target)

      //   const result = await fetch('sayfer.club/users/register', { method: 'POST', body })
      //     .then(data => data.json())
      //     .then(res => {
      //       return res
      //       // const resString = JSON.stringify(res)

      //       // setErrMsg(resString)
      //     })
      regResult = await registration({ username: user, password: pwd }).unwrap()
      const userData = await login({ username: user, password: pwd }).unwrap()
      dispatch(setCredentials({ ...userData, user }))
      setUser('')
      setPwd('')
      setMatchPwd('')
      setErrMsg('Вы успешно зарегистрировались')
      // redirect
      navigate('/welcome')
    } catch (err: any) {
      /* @ts-ignore */
      if (regResult.message === "User Exist") setErrMsg('User Exist')
    }
  }

  /* @ts-ignore */
  let content =
    isLoadingRegistration || isLoadingLogin ? 'Loading...' :
      (
        <div>
          <form onSubmit={handleSubmitReg} style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
            <div className="p-4 flex flex-col gap-2 flex-1">
              <h1 className="flex justify-center text-2xl font-light">Регистрация</h1>
              <div style={errMsg ? style.shownErrMsg : style.offscreen}>
                {errMsg}
              </div>
              <div style={style.loginView}>
                <div className="flex flex-row justify-between py-2">
                  <label className="text-white text-lg font-light" htmlFor="username">
                    Логин
                  </label>
                  {/* <Link className="text-lg font-light" to='/'>Регистрация</Link> */}
                </div>
                {/* <div style={style.inputView, !validName && { borderColor: '#661111' }}> */}
                {/* <Icon name='account-box' color='#666' size={28} /> */}
                <div style={{ borderRadius: 50, borderWidth: 2, borderColor: validUser || user === '' ? '#0f0' : '#f00', boxShadow: validUser || user === '' ? focusUser ? '0px 0px 15px #0f0' : '0px 0px 6px #0f0' : '0px 0px 6px #f00', display: 'flex', flex: 1, position: 'relative', color: "#fff" }}
                  className='bg-[#001102]'>
                  <input
                    id="username"
                    type="text"
                    onFocus={() => setFocusUser(true)}
                    onBlur={() => setFocusUser(false)}
                    value={user}
                    onChange={(e: any) => setUser(e.target.value)}
                    ref={userRef}
                    className="bg-transparent focus:text-white h-14 flex-1 pl-6 text-xl autofill:bg-none autofill:border-hidden"
                  />
                </div>
                {/* <Icon name={validName ? 'check' : 'close'} color={validName ? '#116611' : '#661111'} size={28} /> */}
                {/* </div> */}
                <div style={focusUser && user && !validUser ? style.infoInput : style.offscreen}>
                  {/* <Icon name='info' color='#116611' size={28} /> */}
                  <span style={style.infoText}>
                    От 4 до 24 символов.
                    {'\n'}Первый символ - буква.
                    {'\n'}Разрешены:
                    {'\n'}{'\t'}· латинские буквы,
                    {'\n'}{'\t'}· цифры,
                    {'\n'}{'\t'}· нижнее подчёркивание,
                    {'\n'}{'\t'}· дефис.
                  </span>
                </div>
              </div>
              <div>
                <div className="flex flex-row justify-between py-2">
                  <label className="text-white text-lg font-light" htmlFor="password">
                    Пароль
                  </label>
                  {/* <Link className="text-lg font-light" to='/'>Регистрация</Link> */}
                </div>
                {/* <div style={[style.inputView, !validPwd && { borderColor: '#661111' }]}> */}
                {/* <Icon name='lock' color='#666' size={28} /> */}
                <div style={{ borderRadius: 50, borderWidth: 2, borderColor: validPwd || pwd === '' ? '#0f0' : '#f00', boxShadow: validPwd || pwd === '' ? pwdFocus ? '0px 0px 15px #0f0' : '0px 0px 6px #0f0' : '0px 0px 6px #f00', display: 'flex', flex: 1, position: 'relative', color: "#fff" }}
                  className='bg-[#001102]'>
                  <input
                    type="password"
                    id="password"
                    // secureTextEntry
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                    value={pwd}
                    onChange={(e: any) => setPwd(e.target.value)}
                    className="bg-transparent focus:text-white h-14 flex-1 pl-6 text-xl autofill:bg-none autofill:border-hidden"
                  />
                </div>
                {/* <Icon name={validPwd ? 'check' : 'close'} color={validPwd ? '#116611' : '#661111'} size={28} /> */}
                {/* </div> */}
                <div style={pwdFocus && pwd && !validPwd ? style.infoInput : style.offscreen}>
                  {/* <Icon name='info' color='#116611' size={28} /> */}
                  <span style={style.infoText}>
                    От 8 до 24 символов. {'\n'}
                    Пароль должен содержать:
                    {'\n'}{'\t'}· Как минимум 1 заглавную букву,
                    {'\n'}{'\t'}· Как минимум 1 строчную букву,
                    {'\n'}{'\t'}· Как минимум 1 цифру.
                  </span>
                </div>
              </div>
              <div>
                <div className="flex flex-row justify-between py-2">
                  <label className="text-white text-lg font-light" htmlFor="matchPassword">
                    Повторите пароль
                  </label>
                </div>
                {/* <div style={[style.inputView, !(validMatch && !!matchPwd) && { borderColor: '#661111' }]}> */}
                {/* <Icon name='lock' color='#666' size={28} /> */}
                <div style={{ borderRadius: 50, borderWidth: 2, borderColor: validMatch ? '#0f0' : '#f00', boxShadow: validMatch ? matchFocus ? '0px 0px 15px #0f0' : '0px 0px 6px #0f0' : '0px 0px 6px #f00', display: 'flex', flex: 1, position: 'relative', color: "#fff" }}
                  className='bg-[#001102]'>
                  <input
                    id="matchPassword"
                    type="password"
                    // secureTextEntry
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                    value={matchPwd}
                    onChange={(e: any) => setMatchPwd(e.target.value)}
                    className="bg-transparent focus:text-white h-14 flex-1 pl-6 text-xl autofill:bg-none autofill:border-hidden"
                  />
                </div>
                {/* <Icon name={validMatch && matchPwd ? 'check' : 'close'} color={validMatch && matchPwd ? '#116611' : '#661111'} size={28} /> */}
                {/* </div> */}
                <div style={matchFocus && matchPwd && !validMatch ? style.infoInput : style.offscreen}>
                  {/* <Icon name='info' color='#116611' size={28} /> */}
                  <span style={style.infoText}>
                    Повторите пароль, {'\n'}введённый в строке выше.
                  </span>
                </div>
              </div>
              <div className="h-6" />
              <div className="gap-2 flex justify-center">
                {/* <span style={{ color: '#333', fontSize: 16 }}>Уже зарегистрированы?</span> */}
                <button
                  disabled={success}
                  style={{ borderRadius: 50, borderWidth: 2, borderColor: '#0f0', boxShadow: '0px 0px 6px #0f0', display: 'flex', color: "#fff" }}
                  className="bg-[#001102] p-3 px-5 text-lg font-light"
                  type="submit">Зарегистрироваться</button>
              </div>
            </div>
          </form>
        </div >)

  return content
}

const style = {
  shownErrMsg: {
    backgroundColor: '#222222',
    borderRadius: 10,
    borderColor: '#006600',
    borderWidth: 1
  },
  offscreen: {
    display: 'none',
  },
  loginView: {

  },
  inputView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#116611',
    padding: 5,
    height: 48
  },
  inputText: {
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 18,
    width: '82%',
    color: '#fff',
  },
  inputLabel: {
    fontSize: 16,
    color: '#111',
    marginBottom: 5
  },
  infoInput: {
    marginTop: 10,
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#116611',
    display: 'flex',
    flexDirection: 'row',
    gap: 5
  },
  infoText: {
    fontSize: 14,
    color: '#111',
    // textAlignVertical: 'auto',
    verticalAlign: 'auto'
  }

}