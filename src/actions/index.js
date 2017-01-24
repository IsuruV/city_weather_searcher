import axios from 'axios';

const API_KEY = '667d54d8103019bf8052d39d0e2554df'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&q=`
export const FETCH_WEATHER  = 'FETCH_WEATHER';

export const fetchWeather = (city)=>{
  const url = ROOT_URL+city+',us'
  const request = axios.get(url);
  return{
    type: FETCH_WEATHER,
    payload: request
  }
}
