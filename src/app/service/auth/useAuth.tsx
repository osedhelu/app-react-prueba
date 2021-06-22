import {useContext} from 'react'
import {AuthContext} from './usePrivider'

export const useAuth = () => {
  return useContext(AuthContext)
}
