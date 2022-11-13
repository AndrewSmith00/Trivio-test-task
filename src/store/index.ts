import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import users from './modules/users';
import companies from './modules/companies'

export default createStore({
  modules: {
    users: users,
    companies: companies,
  },
  plugins: [createPersistedState()]
})
