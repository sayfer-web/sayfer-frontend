import { useRef, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { useDispatch } from "react-redux"
import { setCredentials } from "src/features/auth/authSlice"
import { useLoginMutation } from "src/features/auth/authApiSlice"
// import { IconBack } from "../assets/icons/Others/IconBack"


/* @ts-ignore */
export const Login = () => {

  const userRef = useRef(null)
  const errRef = useRef(null)
  const [user, setUser] = useState('')
  // const [validUser, toggleValidUser] = useState(true)
  const [focusUser, toggleFocusUser] = useState(false)
  const [pwd, setPwd] = useState('')
  const [focusPwd, toggleFocusPwd] = useState(false)
  const [errMsg, setErrMsg] = useState('')
  const navigate = useNavigate()

  const [login, { isLoading }] = useLoginMutation()
  const dispatch = useDispatch()

  // useEffect(() => {
  //   /* @ts-ignore */
  //   useRef.current.focus()
  // }, [])

  useEffect(() => {
    setErrMsg('')
  }, [user, pwd])

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      // setUser('1')
      const userData = await login({ username: user, password: pwd }).unwrap()
      // setUser('2')
      dispatch(setCredentials({ ...userData, user }))
      // setUser(userData.token)
      setPwd('')
      navigate('/welcome')
    } catch (err: any) {
      if (!err.originalStatus) {
        setErrMsg('No Server Response')
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password')
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized')
      } else {
        setErrMsg('Login Failed')
      }
      /* @ts-ignore */
      // errRef.current.focus()
    }
  }

  // const handleUserInput = (e: any) => setUser(e.target.value)

  // const handlePwdInput = (e: any) => setPwd(e.target.value)

  const content = isLoading ? <h1>Вход...</h1> : (

    <section className="login flex-1 flex flex-col gap-4 p-4">

      <h1 className="flex justify-center text-2xl font-light">Вход в личный кабинет</h1>
      <p ref={errRef} className={errMsg ? 'errmsg' : 'hidden'}>{errMsg}</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">



        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-row justify-between">
            <label className="text-white text-lg font-light" htmlFor="name">
              Логин
            </label>
            {/* <Link className="text-lg font-light" to='/'>Регистрация</Link> */}
          </div>
          <div style={{ borderRadius: 50, borderWidth: 2, borderColor: '#0f0', boxShadow: '0px 0px 6px #0f0', display: 'flex', flex: 1, position: 'relative', color: "#fff" }}
            className='bg-[#001102]'
          >
            <input
              type="text"
              id="username"
              // ref={userRef}
              value={user}
              autoComplete="on"
              required
              onChange={(value) => setUser(value.target.value)}
              // onFocus={() => toggleFocusUser(true)}
              // onBlur={() => toggleFocusUser(false)}
              className='bg-transparent focus:text-white h-14 flex-1 pl-6 text-xl autofill:bg-none autofill:border-hidden" type="text" id="name" placeholder="+0999999" ' />

          </div>
        </div>


        <div className="flex flex-col w-full gap-4">
          <div className="flex flex-row justify-between">
            <label className="text-white text-lg font-light" htmlFor="password">
              Пароль
            </label>
            {/* <Link className="text-lg font-light" to='/'>Забыли?</Link> */}
          </div>
          <div style={{ borderRadius: 50, borderWidth: 2, borderColor: '#0f0', boxShadow: '0px 0px 6px #0f0', display: 'flex', flex: 1, position: 'relative', color: "#fff" }}
            className={`bg-[#001102]`}
          >
            <input
              type="password"
              id="password"
              value={pwd}
              autoComplete="on"
              required
              // ref={userRef}
              onChange={(value) => setPwd(value.target.value)}
              // onFocus={() => toggleFocusPwd(true)}
              // onBlur={() => toggleFocusPwd(false)}
              className='bg-transparent focus:text-white h-14 flex-1 pl-6 text-xl autofill:bg-none autofill:border-hidden" type="text" id="name" placeholder="+0999999" ' />

          </div>
        </div>

        <div className="h-4" />

        <div className="flex justify-center">
          <button
            style={{ borderRadius: 50, borderWidth: 2, borderColor: '#0f0', boxShadow: '0px 0px 6px #0f0', display: 'flex', color: "#fff" }}
            className="bg-[#001102] p-3 px-5 text-lg font-light"
            type="submit">Войти в кабинет</button>
        </div>



      </form>
    </section>
  )
  return content
}
