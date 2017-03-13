import {EntityBase} from 'ptz-core-domain';

export default class <%= entity %> extends EntityBase implements I<%= entity %>{
    
    newPropTest: string;

    constructor(args:I<%= entity %>Args){        
        super(args);

        //Map your props:
        this.newPropTest = args.newPropTest;
    }

    funcTest():boolean{
        return true;
    }
}

