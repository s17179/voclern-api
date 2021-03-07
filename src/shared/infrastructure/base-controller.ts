import { AuthenticatedUser } from '../application/authenticated-user';

export class BaseController {
  // TODO request type?
  getAuthenticatedUser(request): AuthenticatedUser {
    return request.user;
  }
}
