import { Controller, Post } from '@nestjs/common';
import { LoginInterface } from '../login.interface';

export default class LoginSpotifyController implements LoginInterface {
  authenticate(): string {
    return '';
  }
  login(): string {
    return '';
  }
  refreshToken(): string {
    return '';
  }
}
