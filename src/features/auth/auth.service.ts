// src/shared/services/auth.service.ts
import axios from 'axios'
import API_URL from '../../shared/config/config'

export const getMe = async () => {
  const response = await axios.get(`${API_URL}/events`, { withCredentials: true })
  return response.data
}
