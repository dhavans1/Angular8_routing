

export class AuthService {

    isLoggedIn: boolean = false;

    onLogIn(){
        this.isLoggedIn = true;
    }

    onLogOut(){
        this.isLoggedIn = false;
    }

    isAuthenticated(): Promise<boolean>{
        return new Promise(
            (resolve, reject) => {
                setTimeout( () => {
                    return resolve(this.isLoggedIn);
                }, 1000)
            }
        );
    }
}