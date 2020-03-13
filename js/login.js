var myApp = new Vue({
    el: '#myApp',
    data: {
        username: '',
        password: ''
    },
    methods: {
        getName: function() {
            return 'Username: ' + this.username;
        },
        submit: function() {
            if (this.username == "" || this.password == "") {
                alert('Enter Username or Password')
            } else if (this.username == localStorage.getItem('email') && this.password == localStorage.getItem('password')) {
                localStorage.setItem('username', this.username);
                window.location.href = "product.html";
            } else {
                alert('Invalid Username or Password')
            }
        }
    }
});
var productPage = new Vue({
    el: '#ProductPage',
    data: {
        username: localStorage.getItem('username')
    },
    methods: {
        getUsername: function() {
            return this.username;
        },
        logout: () => {
            localStorage.removeItem('username')
            localStorage.removeItem('password')
            localStorage.removeItem('email')
        },
        checkLogin: function() {
            if (!localStorage.getItem('username')) {
                window.location.href = "login.html"
            }
        }
    }
});

var registrationApp = new Vue({
    el: '#app-registration',
    data: {
        username: "",
        email: '',
        password: "",
        confirm_password: "",
        address_primary: '',
        address_secondary: '',
        city: '',
        country: '',
        pincode: ''
    },
    methods: {
        passwordCheck: function() {
            console.log([this.password, this.confirm_password, String(this.password) == String(this.confirm_password)]);
            if (this.password != "" && this.confirm_password != "" && this.password != this.confirm_password) {
                console.log('PASSWORD NOT MATCH');
            }
        },
        submit: function() {
            if (this.password != "" && this.confirm_password != "" && this.password != this.confirm_password) {
                console.log('PASSWORD NOT MATCH');
                return alert('Password not Match')
            }
            localStorage.setItem('email', this.email)
            localStorage.setItem('password', this.password)
            console.log(this.username, this.email, this.password, this.confirm_password, this.address_primary, this.address_secondary, this.city, this.country, this.pincode);
            //Do Validation and GET/POST Request
            window.open('login.html', '_blank');
        }
    }
})