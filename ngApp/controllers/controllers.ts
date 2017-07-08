namespace passport.Controllers {

    export class LoginController {
      public userInfo

      public login() {
        this.userService.loginUser(this.userInfo).then((data) => {
          this.$window.localStorage.setItem("token", JSON.stringify(data.token));
          alert('login successful');
        })
      }

      public constructor(
        private userService,
        public $window
      ) {

      }

    }

    export class RegisterController {
      public user

      public signup() {
        this.userService.registerUser(this.user).then(() => {
          alert('signup successful, please login');
        })
      }

      public constructor(
        private userService
      ) {

      }
    }

}
