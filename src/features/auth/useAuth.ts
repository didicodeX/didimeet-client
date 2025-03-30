import { useQuery } from '@tanstack/react-query'
import { getMe } from './auth.service'

export const useMeQuery = () => {
  return useQuery({
    queryKey: ['events'],
    queryFn: getMe,
    retry: false, 
  })
}