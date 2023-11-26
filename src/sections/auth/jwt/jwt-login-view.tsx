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
// routes
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
import { useSearchParams, useRouter } from 'src/routes/hooks';
// config
import { PATH_AFTER_LOGIN } from 'src/config-global';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// auth
import { useAuthContext } from 'src/auth/hooks';
// components
import Iconify from 'src/components/iconify';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import { useNavigate } from 'react-router';
import { useLoginMutation } from 'src/app/features/auth/authApiSlice';
import { useDispatch } from 'react-redux';
import { setCredentials } from 'src/app/features/auth/authSlice';
import { TextField, makeStyles, withStyles } from '@mui/material';
import { useLocales } from 'src/locales';

// ----------------------------------------------------------------------


// const ValidationTextField = withStyles({
//   root: {
//     '& input:valid + fieldset': {
//       borderColor: 'orange',
//       borderWidth: 1,
//     },
//     '& .MuiOutlinedInput-root':{
//       '&:hover fieldset': {
//         borderColor: 'orange'
//       },
//       '&.Mui-focused fieldset': {
//         borderColor: 'orange',
//       },
//     },
//     '& input:invalid + fieldset': {
//       borderColor: 'orange',
//       borderWidth: 1,
//       backgroundColor: 'black',
//     },

//     '& input:valid:focus + fieldset': {
//       borderColor: 'orange',
//       borderLeftWidth: 5,
//       padding: '4px !important', // override inline-style
//     },
//   },
// })(TextField);

//Style MUI

// const useStyles = makeStyles((theme: any) => ({
//   input: {
//     '&:-webkit-autofill': {
//       /* Установите новый цвет фона, границы и цвет текста */
//       backgroundColor: '#fff',
//       border: '1px solid #000',
//       color: '#your-text-color',
//     },
//   },
// }));

export default function JwtLoginView() {

  const { t } = useLocales()

  /* @ts-ingore */
  // const classes = useStyles('dark');
  

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
    /* @ts-ignore */
  //   useRef.current.focus()
  // }, [])

  useEffect(() => {
    setErrMsg('')
  }, [user, pwd])

  const handleSubmit2 = async (e: any) => {
    e.preventDefault()

    try {
      // setUser('1')
      const userData = await login({ username: user, password: pwd }).unwrap()
      // setUser('2')
      dispatch(setCredentials({ ...userData, user }))
      // setUser(userData.token)
      // setPwd('')
      // router.push(returnTo || PATH_AFTER_LOGIN);
      navigate('/dashboard')
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

  // const { login } = useAuthContext();

  const router = useRouter();

  // const [errorMsg, setErrorMsg] = useState('');

  const searchParams = useSearchParams();

  const returnTo = searchParams.get('returnTo');

  // const password = useBoolean();

  // const LoginSchema = Yup.object().shape({
  //   username: Yup.string().required('Username is required'),
  //   password: Yup.string().required('Password is required'),
  // });

  // const defaultValues = {
  //   email: 'demo@minimals.cc',
  //   password: 'demo1234',
  // };

  // const methods = useForm({
  // resolver: yupResolver(LoginSchema),
  // defaultValues,
  // });

  // const {
  //   reset,
  //   handleSubmit,
  //   formState: { isSubmitting },
  // } = methods;

  // const onSubmit = handleSubmit(async (data) => {
  //   try {
  //     await  login({ username: data.username, password: data.password }).unwrap()
      // setUser('1')
      // const userData = await login({ username: user, password: pwd }).unwrap()
      // setUser('2')
      // dispatch(setCredentials({ ...userData, user }))
      // setUser(userData.token)
      // setPwd('')
      // navigate('/welcome')
      // router.push(returnTo || PATH_AFTER_LOGIN);
      // } catch (error) {
      // console.error(error);
      // reset();
      // setErrorMsg(typeof error === 'string' ? error : error.message);
      // }
  // });

  const renderHead = (
    <Stack spacing={2} sx={{ mb: 5 }}>
      <Typography variant="h4">{t('sign_in_to_sayfer_inv')}</Typography>

      <Stack direction="row" spacing={0.5}>
        <Typography variant="body2">{t('new_user')}?</Typography>

        {/* <Link component={RouterLink} href={paths.auth.jwt.register} variant="subtitle2"> */}
        <Link component={RouterLink} href='/auth/registration' variant="subtitle2">
          {t('create_an_account')}
        </Link>
      </Stack>
    </Stack>
  );

  const renderForm = (
    <Stack spacing={2.5}>
      {/* {!!errorMsg && <Alert severity="error">{errorMsg}</Alert>} */}

      <TextField
        type="text"
        id="username"
        label={t('username')}
        ref={userRef}
        value={user}
        autoComplete="on"
        InputLabelProps={{}}
        sx={{ 
          "& input:-webkit-autofill": {
            '-webkit-box-shadow': '0 0 0 100px #000 inset',
            '-webkit-text-fill-color': '#fff',
          }
        }}
        // className={classes.input}
        required
        onChange={(value) => setUser(value.target.value)}
        onFocus={() => toggleFocusUser(true)}
        onBlur={() => toggleFocusUser(false)}
      />

      <TextField
        type="password"
        id="password"
        label={t('password')}
        value={pwd}
        autoComplete="on"
        InputLabelProps={{}}
        sx={{ 
          "& input:-webkit-autofill": {
            '-webkit-box-shadow': '0 0 0 100px #000 inset',
            '-webkit-text-fill-color': '#fff',
          }
        }}
        required
        onChange={(value) => setPwd(value.target.value)}
        onFocus={() => toggleFocusPwd(true)}
        onBlur={() => toggleFocusPwd(false)}
      />

        
      {/* <RHFTextField name="email" label="Email address" /> */}

      {/* <RHFTextField
        name="password"
        label="Password"
        type={password.value ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={password.onToggle} edge="end">
                <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      /> */}

      <Link variant="body2" color="inherit" underline="always" sx={{ alignSelf: 'flex-end' }}>
        {t('forgot_password')}?
      </Link>

      <LoadingButton
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        loading={isLoading}
      >
        {t('login')}
      </LoadingButton>
    </Stack>
  );

  return (
    <form onSubmit={handleSubmit2}>
      {renderHead}

      {/* <Alert severity="info" sx={{ mb: 3 }}>
        {t('use_username')}: <strong>Tester12</strong> / {t('password')} :<strong> Tester12</strong>
      </Alert> */}

      {renderForm}
    </form>
  );
}
