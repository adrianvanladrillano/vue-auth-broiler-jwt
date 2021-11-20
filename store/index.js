import axios from 'axios'
export const state = () => ({
    loggedIn: false,
    notes: [],
    folders: [],
    host: 'http://localhost:5000'
})

export const getters = {
}

export const mutations = {
    // Notes
    SET_NOTES(state, notes) {
        state.notes = notes
        console.log(state.notes)
    },
}

export const actions = {
    async get_something({ commit, state }) {
        axios
            .get(`${state.host}/api/something`)
            .then((response) => {
                commit('SET_SOMETHING', response.data)
                console.log(`${state.host}/api/something`)
            })
            .catch((error) => {
                console.log(error)
            })
            .then(() => {
                // always executed
            })
    },
}