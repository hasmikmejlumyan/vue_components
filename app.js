const app = Vue.createApp({
    data() {
        return {
            detailsAreVisible: false,
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '1221212121',
                    email: 'manuel@lorenz.com',
                },
                {
                    id: 'julue',
                    name: 'Julue Jones',
                    phone: '45454544554',
                    email: 'julue@jones.com',
                },
            ],
        };
    },

    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount('#app');