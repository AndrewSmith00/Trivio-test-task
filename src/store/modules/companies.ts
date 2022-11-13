const state = {
  companiesList: [],
  
};
const getters = {
  getCompaniesListPeek(state: any) {
    return state.companiesList[state.companiesList.length - 1]
  },
  getNewCompanyId(state: any, getters: any):number {
    const length = state.companiesList.length;
    if ( length == 0 ) {
      return 0;
    }
    else {
      return getters.getCompaniesListPeek.id + 1;
    }
  }
};
const actions = {

};
const mutations = {
  deleteCompany(state: any, id: number) {
    const index = state.companiesList.findIndex((item: any) => item.id == id)
    state.companiesList.splice(index, 1);
  },

  pushCompany(state: any, company: any) {
    state.companiesList.push(company);
  },

  changeCompany(state: any, company: any) {
    const index = state.companiesList.findIndex((item: any) => item.id == company.id);

    state.companiesList[index].name = company.name;
    state.companiesList[index].date = company.date;
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};