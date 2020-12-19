import axios from 'axios'
import config from '../config'

export async function setDefaultHeader() {
	axios.defaults.baseURL = config.api
}
