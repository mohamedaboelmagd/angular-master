import { UsersComponent } from './users/users.component';
import { routes } from './app.routes';

describe('routes', () => {
    it('should contains a routes for /user', () => {
        expect(routes).toContain({ path: 'users', component: UsersComponent });
    });
});