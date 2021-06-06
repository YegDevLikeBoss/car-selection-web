import { MakeService } from '../common/api.service'

const state = () => ({
    make: {},
})

const getters = {
    make: (state) => state.make,
}

const actions = {
    async getMake({ commit }, make) {
        const { data } = await MakeService.get(make);
        commit('SET_MAKE', data);
        return data;
    },
}

const mutations = {
    SET_MAKE(state, make) {
        state.make = make
    },
}

const make = {
    state,
    getters,
    actions,
    mutations
}

export default make