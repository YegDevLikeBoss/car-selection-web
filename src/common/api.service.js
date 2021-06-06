import axios from 'axios'
import { API_URL } from '@/common/config'

const instance = axios.create({
    baseURL: API_URL
})

const ApiService = {
    query(resource, params = null) {
        return instance.get(resource, params).catch(error => {
            throw new Error(`[FilmsWBAH] ApiService ${error}`)
        });
    },

    get(resource, id, params = null) {
        return instance.get(`${resource}/${id}`, { params: params }).catch(error => {
            throw new Error(`[FilmsWBAH] ApiService ${error}`)
        });
    },
}

export default ApiService

export const FeaturedService = {
    get() {
        return ApiService.query('/')
    },
}

export const MakeService = {
    get(make) {
        return ApiService.query(`/${make}`)
    },
}

export const ModelService = {
    get(id) {
        return ApiService.get('car', id)
    },
    get_by_name(make, model) {
        return ApiService.get(make, model)
    }
}