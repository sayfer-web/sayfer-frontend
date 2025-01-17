// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
// hooks
import { useMockedUser } from 'src/hooks/use-mocked-user';
// routes
import { paths } from 'src/routes/paths';
// locales
import { useLocales } from 'src/locales';
// components
import Label from 'src/components/label';
import { useAuth } from 'src/hooks/use-auth';
import { _mock } from 'src/_mock';
import { selectCurrentRole, selectCurrentUsername } from 'src/app/features/auth/authSlice';
import { useSelector } from 'react-redux';
import { useGetUserByUsernameQuery } from 'src/app/features/users/usersApiSlice';
import { useEffect, useState } from 'react';

// ----------------------------------------------------------------------

export default function NavUpgrade() {

  const { t } = useLocales()

  // const { user } = useMockedUser();

  // const { username, status } = useAuth()
  const username = useSelector(selectCurrentUsername)
  const role = useSelector(selectCurrentRole)

  const { data, isLoading, isSuccess, isError, error } = useGetUserByUsernameQuery(username)

  const [contractStatus, setContractStatus] = useState('')

  // let contractStatus = ''

  useEffect(() => {
    console.log(data)

    if (isSuccess) {
      const { contractStatus: contract } = data
      console.log(contract)
      setContractStatus(contract)
      console.log(contractStatus)

    }

  }, [data])

  // let username = 'Sayfer'
  let status = 'User'

  const user = {
    id: '8864c717-587d-472a-929a-8e5f298024da-0',
    displayName: username,
    email: 'demo@minimals.cc',
    password: 'demo1234',
    photoURL: _mock.image.avatar(24),
    phoneNumber: '+40 777666555',
    country: 'United States',
    address: '90210 Broadway Blvd',
    state: 'California',
    city: 'San Francisco',
    zipCode: '94116',
    about: 'Praesent turpis. Phasellus viverra nulla ut metus varius laoreet. Phasellus tempus.',
    role: status,
    isPublic: true,
  };

  // const { t } = useLocales();

  return (
    <Stack
      sx={{
        px: 2,
        py: 5,
        textAlign: 'center',
      }}
    >
      <Stack alignItems="center">
        <Box sx={{ position: 'relative' }}>
          <Avatar src={user?.photoURL} alt={user?.displayName} sx={{ width: 48, height: 48 }} />
          <Label
            color="success"
            variant="filled"
            sx={{
              top: -6,
              px: 0.5,
              left: 40,
              height: 20,
              position: 'absolute',
              borderBottomLeftRadius: 2,
            }}
          >
            {isSuccess && contractStatus}
          </Label>
        </Box>

        <Stack spacing={0.5} sx={{ mt: 1.5, mb: 2 }}>
          <Typography variant="subtitle2" noWrap>
            {username}
          </Typography>

          {/* <Typography variant="body2" noWrap sx={{ color: 'text.disabled' }}>
            {role}
          </Typography> */}
        </Stack>

        <Button variant="contained" href=''>
          {t('upgrade')}
        </Button>
      </Stack>
    </Stack>
  );
}
