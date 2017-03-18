import { IEntityBase, IEntityBaseArgs } from 'ptz-core-domain';

interface I<%= entity %> extends IEntityBase {
    newPropTest?: string;
    funcTest(): boolean;
}

interface I<%= entity %>Args extends IEntityBaseArgs {
    newPropTest?: string;
}
