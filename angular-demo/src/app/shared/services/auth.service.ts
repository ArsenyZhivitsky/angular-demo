import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { User, AuthrResponse } from '../interfaces';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) {}

    get token():string {
        const expDate = new Date(localStorage.getItem('ls-token-exp'))
        if (new Date() > expDate) {
            this.logout()
            return null
        }
        return localStorage.getItem('ls-token')
    }

    login(user: User): Observable<AuthrResponse> {
        const payload = `username=${encodeURIComponent(user.email)}&password=${encodeURIComponent(user.password)}&grant_type=password`
        return this.http.post('http://demo.oybek.com/oauth/token', payload, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        .pipe(
            tap(this.setToken)
        );
    }

    logout() {

    }

    isAuthenticated(): boolean {
        return !!this.token
    }

    private setToken(response: AuthrResponse) {
        const expDate = new Date(new Date().getTime() + +response.expires_in * 1000)
        localStorage.setItem('ls-token', response.access_token)
        localStorage.setItem('ls-token-exp', expDate.toString())
    }
}