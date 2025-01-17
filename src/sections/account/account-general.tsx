import * as Yup from 'yup';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
// hooks
import { useMockedUser } from 'src/hooks/use-mocked-user';
// utils
import { fData } from 'src/utils/format-number';
// assets
import { countries } from 'src/assets/data';
// components
import Iconify from 'src/components/iconify';
import { useSnackbar } from 'src/components/snackbar';
import FormProvider, {
  RHFSwitch,
  RHFTextField,
  RHFUploadAvatar,
  RHFAutocomplete,
} from 'src/components/hook-form';
import { useLocales } from 'src/locales';
import TextField from '@mui/material/TextField';
import React from 'react';
import { IMaskInput } from "react-imask"
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import { useGetUserByUsernameQuery, useUpdateProfileMutation } from 'src/app/features/users/usersApiSlice';
import { useSelector } from 'react-redux';
import { selectCurrentUsername } from 'src/app/features/auth/authSlice';
import Alert from '@mui/material/Alert';

// ----------------------------------------------------------------------

const PHN_REGEX2 = /^(\+\d{1,2}\s?)?(\(?\d{1,4}\)?[-.\s]?)?(\d+)[-.\s]?\d+[-.\s]?\d+$/
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

export default function AccountGeneral() {

  const { t } = useLocales()

  const username = useSelector(selectCurrentUsername)
  const [updateProfile, { isLoading }] = useUpdateProfileMutation()

  const { data: user, error, isLoading: isLoadingUser, isSuccess } = useGetUserByUsernameQuery(username)

  const [errorPhoneMsg, setErrorPhoneMsg] = useState('')
  const [validPhoneNumber, setValidPhoneNumber] = useState(false)

  const [errorEmail, setErrorEmail] = useState('')
  const [validEmail, setValidEmail] = useState(false)

  const [phoneNumber, setPhoneNumber] = useState('+7(999) 999-99-99')
  const [email, setEmail] = useState('mail@sayfer.club')

  useEffect(() => {
    // console.log(phoneNumber)
    const result = PHN_REGEX2.test(phoneNumber)
    // console.log(result)
    result
      ? setErrorPhoneMsg('')
      : setErrorPhoneMsg('Номер телефона введён неверно')

    setValidPhoneNumber(result)
  }, [phoneNumber])

  useEffect(() => {
    // console.log(email)
    const result = EMAIL_REGEX.test(email)
    // console.log(result)
    result
      ? setErrorEmail('')
      : setErrorEmail('Электронная почта введена неверно')

    setValidEmail(result)
  }, [email])



  const [errorMsg, setErrorMsg] = useState('')

  // const { enqueueSnackbar } = useSnackbar();

  // const { user } = useMockedUser();


  useEffect(() => {
    if (isSuccess) {
      setPhoneNumber(user.phoneNumber)
      setEmail(user.email)
    }
  }, [user])

  // const defaultValues = {
  //   displayName: user?.displayName || '',
  //   email: user?.email || '',
  //   photoURL: user?.photoURL || null,
  //   phoneNumber: user?.phoneNumber || '',
  //   country: user?.country || '',
  //   address: user?.address || '',
  //   state: user?.state || '',
  //   city: user?.city || '',
  //   zipCode: user?.zipCode || '',
  //   about: user?.about || '',
  //   isPublic: user?.isPublic || false,
  // };



  const handleSubmit2 = async (e: any) => {
    e.preventDefault()

    // console.log(1)
    const regResult = await updateProfile({ phoneNumber, email }).unwrap()
    // console.log(2)

    // console.log(regResult)

    setErrorMsg('Successfully updated!')

  }

  const isButtonReady = validPhoneNumber && !validEmail && !isLoading


  return (
    <form onSubmit={handleSubmit2}>
      <Grid container spacing={3}>

        <Grid xs={12} md={12}>
          <Card sx={{ p: 3 }}>

            {!!errorMsg && <Alert severity="success">{errorMsg}</Alert>}
            <br />

            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
              }}
            >

              <Stack sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>


                {/* <Stack sx={{ display: 'flex', flexDirection: 'column' }}> */}

                {/* <InputLabel htmlFor="formatted-text-mask-input">{t('phone_number')}</InputLabel> */}


                <TextField
                  type="text"
                  id="phoneNumber"
                  label={t('phone_number')}
                  value={phoneNumber}
                  autoComplete="on"
                  // InputLabelProps={{}}
                  sx={{
                    "& input:-webkit-autofill": {
                      '-webkit-box-shadow': '0 0 0 100px #000 inset',
                      '-webkit-text-fill-color': '#fff',
                    }
                  }}
                  required
                  onChange={(value) => setPhoneNumber(value.target.value)}
                // onFocus={() => toggleFocusPwd(true)}
                // onBlur={() => toggleFocusPwd(false)}
                />
                {/* </Stack> */}


                {!!errorPhoneMsg && phoneNumber !== '' && <Alert severity="error">{errorPhoneMsg}</Alert>}


              </Stack>

              <Stack sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>


                {/* <Stack sx={{ display: 'flex' }}> */}

                {/* <InputLabel htmlFor="formatted-text-mask-input">{t('email')}</InputLabel> */}
                <TextField
                  type="email"
                  id="email"
                  label={t('email')}
                  value={email}

                  autoComplete="on"
                  InputLabelProps={{}}
                  sx={{
                    "& input:-webkit-autofill": {
                      '-webkit-box-shadow': '0 0 0 100px #000 inset',
                      '-webkit-text-fill-color': '#fff',
                    }
                  }}
                  required

                  onChange={(value) => setEmail(value.target.value)}
                // onFocus={() => toggleFocusPwd(true)}
                // onBlur={() => toggleFocusPwd(false)}
                />


                {/* {!!errorEmail && email !== '' && <Alert severity="error">{errorEmail}</Alert>} */}

                {/* <TextField
                type="email"
                id="email"
                label={t('email')}
                value={email}
                autoComplete="on"
                InputLabelProps={{}}
                sx={{
                  "& input:-webkit-autofill": {
                    '-webkit-box-shadow': '0 0 0 100px #000 inset',
                    '-webkit-text-fill-color': '#fff',
                  }
                }}
                required
                onChange={(value) => setEmail(value.target.value)}
              // onFocus={() => toggleFocusPwd(true)}
              // onBlur={() => toggleFocusPwd(false)}
              /> */}
                {/* </Stack> */}
              </Stack>



              {/* <RHFTextField name="displayName" label={t('name')} />
              <RHFTextField name="email" label={t('email_address')} />
              <RHFTextField name="phoneNumber" label={t('phone_number')} />
              <RHFTextField name="address" label={t('address')} /> */}

              {/* <RHFAutocomplete
                name="country"
                label={t('country')}
                options={countries.map((country) => country.label)}
                getOptionLabel={(option) => option}
                renderOption={(props, option) => {
                  const { code, label, phone } = countries.filter(
                    (country) => country.label === option
                  )[0];

                  if (!label) {
                    return null;
                  }

                  return (
                    <li {...props} key={label}>
                      <Iconify
                        key={label}
                        icon={`circle-flags:${code.toLowerCase()}`}
                        width={28}
                        sx={{ mr: 1 }}
                      />
                      {label} ({code}) +{phone}
                    </li>
                  );
                }}
              /> */}

              {/* <RHFTextField name="state" label={t('state_region')} />
              <RHFTextField name="city" label={t('city')} />
              <RHFTextField name="zipCode" label={t('zip_code')} /> */}
            </Box>



            <Stack spacing={3} alignItems="flex-end" sx={{ mt: 3 }}>
              {/* <RHFTextField name="about" multiline rows={4} label={t('about')} /> */}

              <LoadingButton type="submit" variant="contained"
              // loading={isSubmitting}
              disabled={isButtonReady}
              >
                {t('save_changes')}
              </LoadingButton>
            </Stack>
            <br />
          </Card>
        </Grid>
      </Grid>
    </form>
  );
}
