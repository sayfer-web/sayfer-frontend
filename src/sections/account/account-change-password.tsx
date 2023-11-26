import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import LoadingButton from '@mui/lab/LoadingButton';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// components
import Iconify from 'src/components/iconify';
import { useSnackbar } from 'src/components/snackbar';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import { useLocales } from 'src/locales';
import { setCredentials } from 'src/app/features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import { useUpdatePasswordMutation } from 'src/app/features/auth/authApiSlice';

// ----------------------------------------------------------------------

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/

export default function AccountChangePassword() {

  const { t } = useLocales()

  const [oldPwd, setOldPwd] = useState('')
  const [showOldPwd, toggleShowOldPwd] = useState(false)

  const [newPwd, setNewPwd] = useState('')
  const [showNewPwd, toggleShowNewPwd] = useState(false)

  const [validPwd, setValidPwd] = useState(false)
  const [pwdFocus, setPwdFocus] = useState(false)

  const [matchPwd, setMatchPwd] = useState('')
  const [showMatchPwd, toggleShowMatchPwd] = useState(false)
  const [validMatch, setValidMatch] = useState(false)
  const [matchFocus, setMatchFocus] = useState(false)

  const [success, setSuccess] = useState(false)

  const [focusPwd, toggleFocusPwd] = useState(false)
  const [errMsg, setErrMsg] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  /* @ts-ingore */
  const [updatePassword, { isLoading }] = useUpdatePasswordMutation()
  // const [login] = useLoginMutation()
  // const errRef = useRef(null)

  // const [errMsg, setErrMsg] = useState('')


  // const dispatch = useDispatch()
  // const navigate = useNavigate()

  const { enqueueSnackbar } = useSnackbar();

  const password = useBoolean();

  useEffect(() => {
    const result = PWD_REGEX.test(newPwd)
    result
      ? setErrorPwdMsg('')
      : setErrorPwdMsg('Пароль должен содержать, как минимум, одну строчную, заглавную латинские буквы и цифру')
    setValidPwd(result)
    const match = newPwd === matchPwd
    console.log(match)
    match
      ? setErrorMatchPwdMsg('')
      : setErrorMatchPwdMsg('Повторите пароль, введённый ранее')
    setValidMatch(match)
  }, [newPwd, matchPwd])

  // useEffect(() => {
  //   setErrorMsg('')
  // }, [user, oldPwd, matchPwd])

  const handleSubmit2 = async (e: any) => {
    e.preventDefault()

    const v2 = PWD_REGEX.test(oldPwd)
    if (!v2) {
      setErrMsg('Введены невереные данные')
      return
    }
    setSuccess(true)
    setErrMsg('RESULT')

    let regResult = ''


    console.log(1)
    regResult = await updatePassword({ oldPwd, newPwd }).unwrap()
    console.log(2)

    console.log(regResult)
    setOldPwd('')
    setNewPwd('')
    setMatchPwd('')
    setErrorMsg('Successfully updated!')

  }



  const [errorMsg, setErrorMsg] = useState('');
  const [errorUserMsg, setErrorUserMsg] = useState('');
  const [errorPwdMsg, setErrorPwdMsg] = useState('');
  const [errorMatchPwdMsg, setErrorMatchPwdMsg] = useState('');


  const allInputsIsValid = validPwd && validMatch
  // && !isLoading


  return (
    <form onSubmit={handleSubmit2}>
      <Stack component={Card} spacing={3} sx={{ p: 3 }}>

        {!!errorMsg && <Alert severity="success">{errorMsg}</Alert>}


        <TextField
          type="password"
          id="oldPassword"
          label={t('password')}
          value={oldPwd}
          autoComplete="on"
          InputLabelProps={{}}
          sx={{
            "& input:-webkit-autofill": {
              '-webkit-box-shadow': '0 0 0 100px #000 inset',
              '-webkit-text-fill-color': '#fff',
            }
          }}
          required
          onChange={(value) => setOldPwd(value.target.value)}
          onFocus={() => toggleFocusPwd(true)}
          onBlur={() => toggleFocusPwd(false)}
        />


        <TextField
          type="password"
          id="password"
          label={t('password')}
          value={newPwd}
          autoComplete="on"
          InputLabelProps={{}}
          sx={{
            "& input:-webkit-autofill": {
              '-webkit-box-shadow': '0 0 0 100px #000 inset',
              '-webkit-text-fill-color': '#fff',
            }
          }}
          required
          onChange={(value) => setNewPwd(value.target.value)}
          onFocus={() => toggleFocusPwd(true)}
          onBlur={() => toggleFocusPwd(false)}
        />

        {!!errorPwdMsg && newPwd !== '' && <Alert severity="error">{errorPwdMsg}</Alert>}


        <TextField
          type="password"
          id="matchPassword"
          label={t('repeat_password')}
          value={matchPwd}
          autoComplete="on"
          InputLabelProps={{}}
          sx={{
            "& input:-webkit-autofill": {
              '-webkit-box-shadow': '0 0 0 100px #000 inset',
              '-webkit-text-fill-color': '#fff',
            }
          }}
          required
          onChange={(value) => setMatchPwd(value.target.value)}
          onFocus={() => toggleFocusPwd(true)}
          onBlur={() => toggleFocusPwd(false)}
        />

        {!!errorMatchPwdMsg && <Alert severity="error">{errorMatchPwdMsg}</Alert>}


        {/* 
        <RHFTextField
          name="oldPassword"
          type={password.value ? 'text' : 'password'}
          label={t('old_password')}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={password.onToggle} edge="end">
                  <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <RHFTextField
          name="newPassword"
          label={t('new_password')}
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
          helperText={
            <Stack component="span" direction="row" alignItems="center">
              <Iconify icon="eva:info-fill" width={16} sx={{ mr: 0.5 }} /> {t('password_must_be_minimum')}
              6+ {t('symbols')}
            </Stack>
          }
        />

        <RHFTextField
          name="confirmNewPassword"
          type={password.value ? 'text' : 'password'}
          label={t('confirm_new_password')}
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



        <LoadingButton type="submit" variant="contained"
          // loading={isSubmitting} 
          sx={{ ml: 'auto' }}>
          {t('save_changes')}
        </LoadingButton>


      </Stack>
    </form>
  );
}
