import { IEntityBase, IEntityBaseArgs } from 'ptz-core-domain';

export interface I<%= entity %> extends IEntityBase {
    newPropTest?: string;
    funcTest(): boolean;
}

export interface I<%= entity %>Args extends IEntityBaseArgs {
    newPropTest?: string;
}
