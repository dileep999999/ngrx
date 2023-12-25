import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root',
})
export class AuthService{
constructor(private http: HttpClient){

}
FIREBASE_APIKEY = 'AIzaSyBnOHRo6x5NvBONksAiwBu8RVkuo5JfXyI';
login(email:string,password:string){
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${this.FIREBASE_APIKEY}
    `,{email,password,returnSecureToken:true});
}
}