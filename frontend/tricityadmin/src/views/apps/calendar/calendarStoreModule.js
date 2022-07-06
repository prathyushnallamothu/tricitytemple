import axios from 'axios'

export default {
    namespaced: true,
    state: {
        calendarOptions: [{
                color: 'danger',
                label: 'Personal',
            },
            {
                color: 'primary',
                label: 'Business',
            },
            {
                color: 'warning',
                label: 'Family',
            },
            {
                color: 'success',
                label: 'Holiday',
            },
            {
                color: 'info',
                label: 'ETC',
            },
        ],
        selectedCalendars: ['Personal', 'Business', 'Family', 'Holiday', 'ETC'],
    },
    getters: {},
    mutations: {
        SET_SELECTED_EVENTS(state, val) {
            state.selectedCalendars = val
        },
    },
    actions: {
        fetchEvents(ctx, { calendars }) {
            return new Promise((resolve, reject) => {
                axios
                    .get('/events', {
                        params: {
                            calendars: calendars.join(','),
                        },
                    })
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        addEvent({ commit }, ev) {

            return new Promise((resolve, reject) => {
                axios
                    .post('http://localhost:8888/events', ev, { headers: { "Authorization": "Bearer " + localStorage.getItem("token"), 'Content-Type': 'application/json', } })
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        updateEvent(ctx, { event }) {
            return new Promise((resolve, reject) => {
                axios
                    .post(` / apps / calendar / events / $ { event.id }
                                        `, { event })
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        removeEvent(ctx, { id }) {
            return new Promise((resolve, reject) => {
                axios
                    .delete(` / apps / calendar / events / $ { id } `)
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
    },
}