import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userList: null,
    locations: null,
  },
  mutations: {
    SET_USERS(state, newUserList) {
      state.userList = newUserList.sort((a, b) => {
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
    SET_LOCATIONS(state, newLocations) {
      state.locations = newLocations;
    },
  },
  getters: {
    orderAsc(state) {
      return state.userList.sort((a, b) => {
        let numberA = parseFloat(a.employeeId);
        let numberB = parseFloat(b.employeeId);
        return numberA - numberB;
        // if (numberA < numberB) {
        //   return -1;
        // }
        // if (numberA > numberB) {
        //   return 1;
        // }
        // return 0;
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
                user.location = locationId;
                user.sucursal = state.locations.find((sucursal) => {
                  sucursal.id == user.location;
                });
                // a.sucursal = a.locationId[0];
                // a.position = a.positionId[0];

                // if (a.sucursal === 1) {
                //   a.sucursal = 'Ñuñoa';
                // } else if (a.sucursal === 2) {
                //   a.sucursal = 'Providencia';
                // } else if (a.sucursal === 3) {
                //   a.sucursal = 'Santiago';
                // }

                // if (a.position === 1) {
                //   a.position = 'Copero/a';
                // } else if (a.position === 2) {
                //   a.position = 'Recepcionista';
                // } else if (a.position === 3) {
                //   a.position = 'Chef';
                // } else if (a.position === 4) {
                //   a.position = 'Garzón/a';
                // } else if (a.position === 6) {
                //   a.position = 'Barista';
                // } else if (a.position === 7) {
                //   a.position = 'Supervisor/a';
                // } else if (a.position === 8) {
                //   a.position = 'Aseo';
                // }

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
