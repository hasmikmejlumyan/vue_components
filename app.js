const app = Vue.createApp({
    data() {
        return {
            // detailsAreVisible: false,
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

    // methods: {
    //     toggleDetails() {
    //         this.detailsAreVisible = !this.detailsAreVisible;
    //     }
    // }
});

app.component('friend-contact', {
    template: `
    <li>
        <h2>{{ friend.name  }}</h2>
        <button @click="toggleDetails">
            {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
        </button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>`,

    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '1221212121',
                email: 'manuel@lorenz.com',
            },
        };
    },

    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    },
});

app.mount('#app');