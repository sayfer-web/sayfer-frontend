import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import LoadingButton from '@mui/lab/LoadingButton';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// routes
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
import { useSearchParams, useRouter } from 'src/routes/hooks';
// config
import { PATH_AFTER_LOGIN } from 'src/config-global';
// auth
import { useAuthContext } from 'src/auth/hooks';
// components
import Iconify from 'src/components/iconify';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation, useRegistrationMutation } from 'src/features/auth/authApiSlice';
import { useDispatch } from 'react-redux';
// import { useRegistrationMutation } from 'src/features/registration/registrationApiSlice';
import { setCredentials } from 'src/features/auth/authSlice';
import { TextField } from '@mui/material';

// ----------------------------------------------------------------------

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/


export default function JwtRegisterView() {

  const userRef = useRef(null)
  const errRef = useRef(null)
  const [user, setUser] = useState('')
  // const [validUser, toggleValidUser] = useState(true)
  const [focusUser, toggleFocusUser] = useState(false)

  const [pwd, setPwd] = useState('')
  const [showPwd, toggleShowPwd] = useState(false)

  const [focusPwd, toggleFocusPwd] = useState(false)
  const [errMsg, setErrMsg] = useState('')
  const navigate = useNavigate()

  

  const dispatch = useDispatch()

/* @ts-ingore */
  const [registration, { isLoading }] = useRegistrationMutation()
  // const [login] = useLoginMutation()
  // const errRef = useRef(null)

  const [validUser, setValidUser] = useState(false)

  const [validPwd, setValidPwd] = useState(false)
  const [pwdFocus, setPwdFocus] = useState(false)

  const [matchPwd, setMatchPwd] = useState('')
  const [showMatchPwd, toggleShowMatchPwd] = useState(false)
  const [validMatch, setValidMatch] = useState(false)
  const [matchFocus, setMatchFocus] = useState(false)

  const [success, setSuccess] = useState(false)


  // useEffect(() => {
    /* @ts-ignore */
  //   userRef.current.focus()
  // }, [])

  useEffect(() => {
    console.log('use effect')
    const result = USER_REGEX.test(user)
    result 
      ? setErrorUserMsg('')
      : setErrorUserMsg('Username должен содержать от 4 до 22 латинских символов')

    setValidUser(result)
  }, [user])

  useEffect(() => {
    const result = PWD_REGEX.test(pwd)
    result
    ? setErrorPwdMsg('')
    : setErrorPwdMsg('Пароль должен содержать, как минимум, одну строчную, заглавную латинские буквы и цифру')
    setValidPwd(result)
    const match = pwd === matchPwd
    console.log(match)
    match
    ? setErrorMatchPwdMsg('')
    : setErrorMatchPwdMsg('Повторите пароль, введённый ранее')
    setValidMatch(match)
  }, [pwd, matchPwd])

  // useEffect(() => {
  //   setErrorMsg('')
  // }, [user, pwd, matchPwd])

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
      // const userData = await login({ username: user, password: pwd }).unwrap()
      // dispatch(setCredentials({ ...userData, user }))
      setUser('')
      setPwd('')
      setMatchPwd('')
      setErrorMsg('Successfully registered!')
      // redirect
      // navigate('/dashboard')
    } catch (err: any) {
      /* @ts-ignore */
      if (regResult.message === "User Exist") setErrorMsg('User exist. Take another username')
    }
  }

  // const [login, { isLoading }] = useLoginMutation()
  

  // const { register } = useAuthContext();

  // const router = useRouter();

  const [errorMsg, setErrorMsg] = useState('');
  const [errorUserMsg, setErrorUserMsg] = useState('');
  const [errorPwdMsg, setErrorPwdMsg] = useState('');
  const [errorMatchPwdMsg, setErrorMatchPwdMsg] = useState('');

  // const searchParams = useSearchParams();

  // const returnTo = searchParams.get('returnTo');

  // const password = useBoolean();

  // const RegisterSchema = Yup.object().shape({
  //   firstName: Yup.string().required('First name required'),
  //   lastName: Yup.string().required('Last name required'),
  //   email: Yup.string().required('Email is required').email('Email must be a valid email address'),
  //   password: Yup.string().required('Password is required'),
  // });

  // const defaultValues = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: '',
  // };

  // const methods = useForm({
  //   resolver: yupResolver(RegisterSchema),
  //   defaultValues,
  // });

  // const {
  //   reset,
  //   handleSubmit,
  //   formState: { isSubmitting },
  // } = methods;

  // const onSubmit = handleSubmit(async (data) => {
  //   try {
  //     await register?.(data.email, data.password, data.firstName, data.lastName);

  //     router.push(returnTo || PATH_AFTER_LOGIN);
  //   } catch (error) {
  //     console.error(error);
  //     reset();
  //     setErrorMsg(typeof error === 'string' ? error : error.message);
  //   }
  // });

  
  const allInputsIsValid = validUser && validPwd && validMatch && !isLoading

  const renderHead = (
    <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
      <Typography variant="h4">Get started absolutely free</Typography>

      <Stack direction="row" spacing={0.5}>
        <Typography variant="body2"> Already have an account? </Typography>

        <Link href={paths.auth.jwt.login} component={RouterLink} variant="subtitle2">
          Sign in
        </Link>
      </Stack>
    </Stack>
  );

  const renderTerms = (
    <Typography
      component="div"
      sx={{
        color: 'text.secondary',
        mt: 2.5,
        typography: 'caption',
        textAlign: 'center',
      }}
    >
      {'By signing up, I agree to '}
      <Link underline="always" color="text.primary">
        Terms of Service
      </Link>
      {' and '}
      <Link underline="always" color="text.primary">
        Privacy Policy
      </Link>
      .
    </Typography>
  );

  const renderForm = (
    <form onSubmit={handleSubmitReg}>
      
        <Stack direction={{ xs: 'column', sm: 'column' }} spacing={2}>

{/*           
          <RHFTextField name="firstName" label="First name" />
          <RHFTextField name="lastName" label="Last name" />
        </Stack>

        <RHFTextField name="email" label="Email address" />

        <RHFTextField
          name="password"
          label="Password"
          type={pwd ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => {}} edge="end">
                  <Iconify icon={pwd ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />  */}

{!!errorUserMsg && user !== '' && <Alert severity="error">{errorUserMsg}</Alert>}

              <TextField
        type="text"
        id="username"
        label="Username"
        ref={userRef}
        value={user}
        autoComplete="on"
        required
        onChange={(value) => setUser(value.target.value)}
        onFocus={() => toggleFocusUser(true)}
        onBlur={() => toggleFocusUser(false)}
      />

{!!errorPwdMsg && pwd !== '' && <Alert severity="error">{errorPwdMsg}</Alert>}

      <TextField
        type={showPwd ? 'text' : "password"}
        id="password"
        label="Password"
        value={pwd}
        autoComplete="on"
        required
        onChange={(value) => setPwd(value.target.value)}
        onFocus={() => toggleFocusPwd(true)}
        onBlur={() => toggleFocusPwd(false)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => toggleShowPwd(state => !state)} edge="end">
                <Iconify icon={showPwd ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

{!!errorMatchPwdMsg && <Alert severity="error">{errorMatchPwdMsg}</Alert>}

      <TextField
        type={showMatchPwd ? "text" : "password"}
        id="matchPassword"
        label="Repeat password"
        value={matchPwd}
        autoComplete="on"
        required
        onChange={(value) => setMatchPwd(value.target.value)}
        onFocus={() => toggleFocusPwd(true)}
        onBlur={() => toggleFocusPwd(false)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => toggleShowMatchPwd(state => !state)} edge="end">
                <Iconify icon={showMatchPwd ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

        <LoadingButton
          fullWidth
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          // loading={isLoadingRegister}
          disabled={!allInputsIsValid}
          loading={isLoading}
          // loading={isSubmitting}
        >
          Create account
        </LoadingButton>

        {!!errorMsg && <Alert severity="success">{errorMsg}</Alert>}

      </Stack>
    </form>
  );

  return (
    <>
      {renderHead}

      {renderForm}

      {renderTerms}
    </>
  );
}
