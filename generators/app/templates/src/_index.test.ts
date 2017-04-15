import { ok } from 'ptz-assert';
import { errors } from './index';

describe('<%= appname %>', () => {
    describe('errors', () => {
        it('exports errors', () => {
            ok(errors);
        });
    });
});
