var app = new Vue({

    el: '#root',

    data: {
        email: [],
        isLoaded: false
    },

    created() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {

                    this.email.push(res.data.response)
                    this.checkIsLoaded();
                })
        }

    },

    methods: {
        checkIsLoaded: function(){
            if(this.email.length == 10 ){
                this.isLoaded = true
            }
        }
    }
})