import axios from "axios";
import {baseUrl} from './constants/constants.js'

const instence=axios.create({
    baseURL:baseUrl
})

export default instence
