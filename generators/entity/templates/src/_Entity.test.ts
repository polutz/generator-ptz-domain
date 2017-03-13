import <%= entity %> from './<%= entity %>';
import { ok, equal } from 'ptz-assert';

//This are some tests examples
describe('<%= entity %>', () => {
    
    describe('newPropTest', () => {
        it('set', () => {
            //1) Arrange 
            var args = { newPropTest: 'teste-value' };
            var <%= entityVar %> = new <%= entity %>(args);

            //2) Act 
            <%= entityVar %>.isValid();

            //3) Assert
            equal(args.newPropTest, <%= entityVar %>.newPropTest);
        });
    });

    describe('funcTest', ()=>{
        it('returns true', ()=>{
             //1) Arrange 
            var <%= entityVar %> = new <%= entity %>({});

            //2) Act 
            var result = <%= entityVar %>.funcTest();

            //3) Assert
            ok(result);
        });
    });
});
