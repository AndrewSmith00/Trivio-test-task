const state = {
  usersList: []
};
const getters = {
  getUsersListPeek(state: any) {
    return state.usersList[state.usersList.length - 1]
  },
  getNewUserId(state: any, getters: any):number {
    const length = state.usersList.length;
    if ( length == 0 ) {
      return 0;
    }
    else {
      return getters.getUsersListPeek.id + 1;
    }
  }
};
const actions = {

};
const mutations = {
  deleteUser(state: any, id: number) {
    const index = state.usersList.findIndex((item: any) => item.id == id)
    state.usersList.splice(index, 1);
  },

  pushUser(state: any, user: any) {
    state.usersList.push(user);
  },

  changeUser(state:any, user: any) {
    const index = state.usersList.findIndex((item: any) => item.id == user.id);
    state.usersList[index].name = user.name;
    state.usersList[index].date = user.date;
    state.usersList[index].company = user.company;
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};