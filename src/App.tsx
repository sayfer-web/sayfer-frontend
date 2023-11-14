// i18n
import 'src/locales/i18n';

// scrollbar
import 'simplebar-react/dist/simplebar.min.css';

// lightbox
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

// map
import 'mapbox-gl/dist/mapbox-gl.css';

// editor
import 'react-quill/dist/quill.snow.css';

// carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// image
import 'react-lazy-load-image-component/src/effects/blur.css';

// ----------------------------------------------------------------------

// routes
import * as RouterLinks from 'src/routes/sections';
// theme
import ThemeProvider from 'src/theme';
// locales
import { LocalizationProvider } from 'src/locales';
// hooks
import { useScrollToTop } from 'src/hooks/use-scroll-to-top';
// components
import ProgressBar from 'src/components/progress-bar';
import { MotionLazy } from 'src/components/animate/motion-lazy';
import SnackbarProvider from 'src/components/snackbar/snackbar-provider';
import { SettingsProvider, SettingsDrawer } from 'src/components/settings';
// sections
import { CheckoutProvider } from 'src/sections/checkout/context';
// auth
import { AuthProvider, AuthConsumer } from 'src/auth/context/jwt';
// import { AuthProvider, AuthConsumer } from 'src/auth/context/auth0';
// import { AuthProvider, AuthConsumer } from 'src/auth/context/amplify';
// import { AuthProvider, AuthConsumer } from 'src/auth/context/firebase';

import { BrowserRouter, Outlet, Route, Router, Routes } from 'react-router-dom'
import Dashboard from './layouts/dashboard';
import DashboardLayout from './layouts/dashboard/layout';
import Main from './layouts/dashboard/main';
import AuthModernLayout from './layouts/auth/modern';
import MainLayout from './layouts/main/layout';
import HomePage from './pages/home';
import { Login } from './components/auth/Login';
import AuthClassicLayout from './layouts/auth/classic';
import LoginPage from './pages/auth/jwt/login';
import RegisterPage from './pages/auth/jwt/register';
import OverviewAppPage from './pages/dashboard/app';
// import OverviewBankingPage from './pages/dashboard/banking';
import { LoadingScreen } from './components/loading-screen';
import { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentRole, selectCurrentToken } from './app/features/auth/authSlice';
import { useAuth } from './hooks/use-auth';
import Page403 from './pages/403';

// ----------------------------------------------------------------------

// OVERVIEW
const IndexPage = lazy(() => import('src/pages/dashboard/app'));
const OverviewEcommercePage = lazy(() => import('src/pages/dashboard/ecommerce'));
const OverviewAnalyticsPage = lazy(() => import('src/pages/dashboard/analytics'));
const OverviewBankingPage = lazy(() => import('src/pages/dashboard/banking'));
const OverviewBookingPage = lazy(() => import('src/pages/dashboard/booking'));
const OverviewFilePage = lazy(() => import('src/pages/dashboard/file'));
// PRODUCT
const ProductDetailsPage = lazy(() => import('src/pages/dashboard/product/details'));
const ProductListPage = lazy(() => import('src/pages/dashboard/product/list'));
const ProductCreatePage = lazy(() => import('src/pages/dashboard/product/new'));
const ProductEditPage = lazy(() => import('src/pages/dashboard/product/edit'));
// ORDER
const OrderListPage = lazy(() => import('src/pages/dashboard/order/list'));
const OrderDetailsPage = lazy(() => import('src/pages/dashboard/order/details'));
// INVOICE
const InvoiceListPage = lazy(() => import('src/pages/dashboard/invoice/list'));
const InvoiceDetailsPage = lazy(() => import('src/pages/dashboard/invoice/details'));
const InvoiceCreatePage = lazy(() => import('src/pages/dashboard/invoice/new'));
const InvoiceEditPage = lazy(() => import('src/pages/dashboard/invoice/edit'));
// USER
const UserProfilePage = lazy(() => import('src/pages/dashboard/user/profile'));
const UserCardsPage = lazy(() => import('src/pages/dashboard/user/cards'));
const UserListPage = lazy(() => import('src/pages/dashboard/user/list'));
const UserAccountPage = lazy(() => import('src/pages/dashboard/user/account'));
const UserCreatePage = lazy(() => import('src/pages/dashboard/user/new'));
const UserEditPage = lazy(() => import('src/pages/dashboard/user/edit'));
// BLOG
const BlogPostsPage = lazy(() => import('src/pages/dashboard/post/list'));
const BlogPostPage = lazy(() => import('src/pages/dashboard/post/details'));
const BlogNewPostPage = lazy(() => import('src/pages/dashboard/post/new'));
const BlogEditPostPage = lazy(() => import('src/pages/dashboard/post/edit'));
// JOB
const JobDetailsPage = lazy(() => import('src/pages/dashboard/job/details'));
const JobListPage = lazy(() => import('src/pages/dashboard/job/list'));
const JobCreatePage = lazy(() => import('src/pages/dashboard/job/new'));
const JobEditPage = lazy(() => import('src/pages/dashboard/job/edit'));
// TOUR
const TourDetailsPage = lazy(() => import('src/pages/dashboard/tour/details'));
const TourListPage = lazy(() => import('src/pages/dashboard/tour/list'));
const TourCreatePage = lazy(() => import('src/pages/dashboard/tour/new'));
const TourEditPage = lazy(() => import('src/pages/dashboard/tour/edit'));
// GAMES
const GamesDetailsPage = lazy(() => import('src/pages/dashboard/games/details'));
const GamesListPage = lazy(() => import('src/pages/dashboard/games/list'));
const GamesCreatePage = lazy(() => import('src/pages/dashboard/games/new'));
const GamesEditPage = lazy(() => import('src/pages/dashboard/games/edit'));
// TRANSACTIONS
const TransactionsDetailsPage = lazy(() => import('src/pages/dashboard/transactions/details'));
const TransactionsListPage = lazy(() => import('src/pages/dashboard/transactions/list'));
const TransactionsCreatePage = lazy(() => import('src/pages/dashboard/transactions/new'));
const TransactionsEditPage = lazy(() => import('src/pages/dashboard/transactions/edit'));
// FILE MANAGER
const FileManagerPage = lazy(() => import('src/pages/dashboard/file-manager'));
// APP
const ChatPage = lazy(() => import('src/pages/dashboard/chat'));
const MailPage = lazy(() => import('src/pages/dashboard/mail'));
const CalendarPage = lazy(() => import('src/pages/dashboard/calendar'));
const KanbanPage = lazy(() => import('src/pages/dashboard/kanban'));
// TEST RENDER PAGE BY ROLE
const PermissionDeniedPage = lazy(() => import('src/pages/dashboard/permission'));
// BLANK PAGE
const BlankPage = lazy(() => import('src/pages/dashboard/blank'));


// ----------------------------------------------------------------------

export default function App() {

  // const { username, status, isAdmin } = useAuth()

  let username = 'Sayfer'
  let status = 'User'
  console.log(username, status)


  // const charAt = `

  // ░░░    ░░░
  // ▒▒▒▒  ▒▒▒▒
  // ▒▒ ▒▒▒▒ ▒▒
  // ▓▓  ▓▓  ▓▓
  // ██      ██

  // `;

  // console.info(`%c${charAt}`, 'color: #5BE49B');

  useScrollToTop();

  return (
    // <AuthProvider>
      <LocalizationProvider>
        <SettingsProvider
          defaultSettings={{
            themeMode: 'dark', // 'light' | 'dark'
            themeDirection: 'ltr', //  'rtl' | 'ltr'
            themeContrast: 'default', // 'default' | 'bold'
            themeLayout: 'vertical', // 'vertical' | 'horizontal' | 'mini'
            themeColorPresets: 'default', // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
            themeStretch: false,
          }}
        >
          <ThemeProvider>
            <MotionLazy>
              <SnackbarProvider>
                <CheckoutProvider>
                  <SettingsDrawer />
                  <ProgressBar />
                  {/* <AuthConsumer> */}
                    {/* <Router /> */}
                    {/* <BrowserRouter> */}
                    <Routes>
                      <Route path='/' element={<MainLayout><Suspense fallback={<LoadingScreen />}><Outlet /></Suspense></MainLayout>}>
                        <Route index element={<HomePage />} />
                      </Route>
                      <Route path='/auth' element={<AuthClassicLayout><Suspense fallback={<LoadingScreen />}><Outlet /></Suspense></AuthClassicLayout>}>
                        <Route path='login' element={<LoginPage />} />
                        <Route path='registration' element={<RegisterPage />} />
                      </Route>
                      <Route path='/dashboard' element={
                        // <dashBoardRo
                        <DashboardLayout>
                          <Suspense fallback={<LoadingScreen />}>
                            { status === 'User' ? <Outlet /> : <Page403 /> }
                          </Suspense>
                        </DashboardLayout>
                      }>
                        <Route index element={<IndexPage />} />
                        {/* <Route pth='analytics' element={<OverviewAnalyticsPage />} /> */}
                        <Route path='wallet' element={<OverviewBankingPage />} />

                        <Route path='post'>
                          <Route index element={<BlogPostsPage />} />
                          <Route path=':id' element={<BlogPostPage />} />
                          <Route path=':id/edit' element={<BlogEditPostPage />} />
                          <Route path='new' element={<BlogNewPostPage />} />
                        </Route>
                        
                        <Route path='job'>
                          <Route index element={<JobListPage />} />
                          <Route path=':id' element={<JobDetailsPage />} />
                          <Route path=':id/edit' element={<JobEditPage />} />
                          <Route path='new' element={<JobCreatePage />} />
                        </Route>

                        <Route path='games'>
                          <Route index element={<GamesListPage />} />
                          <Route path=':id' element={<GamesDetailsPage />} />
                          <Route path=':id/edit' element={<GamesEditPage />} />
                          <Route path='new' element={<GamesCreatePage />} />
                        </Route>

                        <Route path='chat' element={<ChatPage />} />

                        <Route path='transactions'>
                          <Route index element={<TransactionsListPage />} />
                          <Route path=':id' element={<TransactionsDetailsPage />} />
                          <Route path=':id/edit' element={<TransactionsEditPage />} />
                          <Route path='new' element={<TransactionsCreatePage />} />
                        </Route>

                        <Route path='user'>
                          <Route index element={<UserProfilePage />} />
                          <Route path='account' element={<UserAccountPage />} />
                          <Route path='list' element={<UserListPage />} />
                        </Route>

                        <Route path='mail' element={<MailPage />} />
                        <Route path='kanban' element={<KanbanPage />} />

                        {status === 'Admin' && (
                        <Route path='analytics' element={<OverviewAnalyticsPage />} />
                        )}
                        {status === 'Admin' && (
                        <Route path='booking' element={<OverviewBookingPage />} />
                        )}
                     
                        {/* <Route path='booking' element={<OverviewBookingPage />} /> */}
                      </Route>
                    </Routes>
                    {/* </BrowserRouter> */}
                  {/* </AuthConsumer> */}
                </CheckoutProvider>
              </SnackbarProvider>
            </MotionLazy>
          </ThemeProvider>
        </SettingsProvider>
      </LocalizationProvider>
    // </AuthProvider>
  );
}
