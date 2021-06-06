import { ModelService } from '../common/api.service'

const state = () => ({
    model: {},
})

const getters = {
    model: (state) => state.model,
}

const actions = {
    async getModel({ commit }, model) {
        const { data } = await ModelService.get(model);
        commit('SET_MODEL', data);
        return data;
    },
}

const mutations = {
    SET_MODEL(state, model) {
        state.model = model
    },
}

const model = {
    state,
    getters,
    actions,
    mutations
}

export default model