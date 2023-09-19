// @mui
import { Theme, SxProps } from '@mui/material/styles';
import Button from '@mui/material/Button';
// routes
import { RouterLink } from 'src/routes/components';
// config
import { PATH_AFTER_LOGIN } from 'src/config-global';
import { useNavigate } from 'react-router';

// ----------------------------------------------------------------------

type Props = {
  sx?: SxProps<Theme>;
};

export default function LoginButton({ sx }: Props) {

  const navigate = useNavigate()

  return (
    <Button
      // component={RouterLink} 
      // href={PATH_AFTER_LOGIN} 
      onClick={() => navigate('/auth/jwt/login') }
      variant="outlined" sx={{ mr: 1, ...sx }}>
      Login
    </Button>
  );
}
