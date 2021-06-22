import {useContext} from 'react'
import {AuthContext} from './usePrivider'

export const useAuth = () => {
  const contextValue = useContext(AuthContext)
  return contextValue
}
