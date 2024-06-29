// stores/counter.js
import { defineStore } from 'pinia';

export const useUserInfo = defineStore('userInfo', {
  state: () => ({
    token: '3',
  }),
  actions: {
    setToken(data) {
			this.token = data
    },
  },
});

