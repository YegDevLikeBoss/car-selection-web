import { FeaturedService } from '../common/api.service'

const state = () => ({
    featured: {},
})

const getters = {
    featured: (state) => state.featured,
}

const actions = {
    async getFeatured({ commit }) {
        const { data } = await FeaturedService.get();
        commit('SET_FEATURED', data);
        return data;
    },
}

const mutations = {
    SET_FEATURED(state, featured) {
        state.featured = featured
    },
}

const featured = {
    state,
    getters,
    actions,
    mutations
}

export default featured