import { UserForRegistrationDto } from './../../_interfaces/user/userForRegistrationDto';
import { EnvironmentUrlService } from './environment-url.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistrationResponseDto } from 'src/app/_interfaces/response/registrationResponseDto';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private http: HttpClient,
    private envUrl: EnvironmentUrlService
  ) {}

  public registerUser(
    route: string,
    body: UserForRegistrationDto
  ): Observable<RegistrationResponseDto> {
    return this.http.post<RegistrationResponseDto>(
      this.createCompleteRoute(route, this.envUrl.urlAddress),
      body
    );
  }

  private createCompleteRoute(route: string, envAddress: string): string {
    return `${envAddress}/${route}`;
  }
}
