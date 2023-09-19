import { Helmet } from 'react-helmet-async';
import { AmplifyForgotPasswordView } from 'src/sections/auth/amplify';
// sections
// import { AmplifyForgotPasswordView } from 'src/sections/auth/amplify';

// ----------------------------------------------------------------------

export default function ForgotPasswordPage() {
  return (
    <>
      <Helmet>
        <title> Amplify: Forgot Password</title>
      </Helmet>

      <AmplifyForgotPasswordView />
    </>
  );
}
