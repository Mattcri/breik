import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userList: null,
    branchOfficesList: null,
    turnList: null,
    locations: null,
    positions: null,
    // users: null,
  },
  mutations: {
    SET_USERS(state, newUserList) {
      state.userList = newUserList.sort((a, b) => {
        let numberA = parseFloat(a.employeeId);
        let numberB = parseFloat(b.employeeId);
        return numberA - numberB;
      });
    },
    SET_LOCATIONS(state, newLocations) {
      state.locations = newLocations;
    },
    SET_POSITIONS(state, newPositions) {
      state.positions = newPositions;
    },
    SET_BRANCH_OFFICE(state, newBrancOffices) {
      state.branchOfficesList = newBrancOffices.reverse();
    },
    SET_TURNS(state, newTurns) {
      state.turnList = newTurns;
    },
    // SET_USERS_COMPLETE(state, newUsers) {
    //   state.users = newUsers;
    // },
  },
  getters: {
    orderAsc(state) {
      return state.userList.sort((a, b) => {
        let numberA = parseFloat(a.employeeId);
        let numberB = parseFloat(b.employeeId);
        if (numberA < numberB) {
          return -1;
        }
        if (numberA > numberB) {
          return 1;
        }
        return 0;
      });
    },
  },
  actions: {
    updateUsers({ commit, state }) {
      return new Promise((resolve, reject) => {
        fetch('http://localhost:3004/users')
          .then((response) => response.json())
          .then((data) => {
            commit(
              'SET_USERS',
              data.map((user) => {
                let locationId = user.locationId[0];
                let positionId = user.positionId[0];
                user.location = state.locations.find(
                  (location) => location.id == locationId
                );
                user.position = state.positions.find(
                  (position) => position.id == positionId
                );

                // user.location.hours = state.locations.map((hours) => {
                //   let startTime = parseFloat(hours.startTime);
                //   let endTime = parseFloat(hours.endTime);
                //   if (endTime === 0) {
                //     endTime = 24;
                //   }
                //   return Math.abs((startTime - endTime) * 5);
                // });
                // user.location.hours = () => {
                //   let startTime = parseFloat(startTime);
                //   let endTime = parseFloat(endTime);
                //   if (endTime === 0) {
                //     endTime = 24;
                //   }
                //   return Math.abs((startTime - endTime) * 5);
                // };

                return user;
              })
            );
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getLocations({ commit }) {
      return new Promise((resolve, reject) => {
        fetch('http://localhost:3004/locations')
          .then((response) => response.json())
          .then((data) => {
            commit('SET_LOCATIONS', data);
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getPositions({ commit }) {
      return new Promise((resolve, reject) => {
        fetch('http://localhost:3004/positions')
          .then((response) => response.json())
          .then((data) => {
            commit('SET_POSITIONS', data);
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getBranchOffices({ commit }) {
      return new Promise((resolve, reject) => {
        fetch('http://localhost:3004/locations')
          .then((response) => response.json())
          .then((data) => {
            commit('SET_BRANCH_OFFICE', data);
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getTurnsList({ commit }) {
      return new Promise((resolve, reject) => {
        fetch('http://localhost:3004/turnTemplates')
          .then((response) => response.json())
          .then((data) => {
            commit('SET_TURNS', data);
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // getUsersComplete({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     state.userList.map((user) => {
    //       user.hours =
    //     });
    //   });
    // },
    // getLocations({ commit }) {
    //   return fetch('http://localhost:3004/locations')
    //     .then((response) => response.json())
    //     .then((response) => {
    //       commit('SET_LOCATIONS', response.data);
    //     })
    //     .catch((reject) => console.error(reject));
    // },
  },
  modules: {},
});
