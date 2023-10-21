import jwtDecode from 'jwt-decode'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from 'src/app/features/auth/authSlice'

export const useAuth = () => {

  const currentUserToken = useSelector(selectCurrentToken)

  let isManager = false
  let isAdmin = false
  let status = "User"

  if(currentUserToken) {
    const decoded = jwtDecode(currentUserToken)
    /* @ts-ignore */
    const { username, roles } = decoded.UserInfo

    isManager = roles.includes('Manager')
    isAdmin = roles.includes('Admin')

    if(isManager) status = 'Manager'
    if(isAdmin) status = 'Admin'

    return { username, roles, status, isManager, isAdmin }
  }

  return { username: 'Guest', roles: ['User'], isManager, isAdmin, status }
}
