import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux"
import { selectCurrentToken } from "src/app/features/auth/authSlice";

export const  RequireAuth = () => {
  const token = useSelector(selectCurrentToken)
  const location = useLocation()

  /* @ts-ignore */
  return (
    token
      ? (<Outlet />)
      : (<Navigate to="/login" state={{ from: location }} replace />)
  )
}