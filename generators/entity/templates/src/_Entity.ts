import {EntityBase} from 'ptz-core-domain';
import { I<%= entity %>, I<%= entity %>Args } from './I<%= entity %>';

export default class <%= entity %> extends EntityBase implements I<%= entity %> {

    newPropTest: string;

    constructor(args: I<%= entity %>Args) {
        super(args);

        // Map your props:
        this.newPropTest = args.newPropTest;
    }

    funcTest(): boolean {
        return true;
    }
}
