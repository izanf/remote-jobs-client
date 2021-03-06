import Vuex from 'vuex'
import { fetchJobsByCategory } from '~/utils/githubAPI'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      jobs: {
        frontend: undefined,
        backend: undefined,
        mobile: undefined
      }
    }),
    mutations: {
      setJobsByCategory(state, { category, jobs }) {
        state.jobs[category] = jobs
      }
    },
    actions: {
      fetchJobs({ commit }, { category }) {
        return fetchJobsByCategory(category).then(jobs =>
          commit('setJobsByCategory', { category, jobs })
        )
      }
    }
  })
}

export default createStore
