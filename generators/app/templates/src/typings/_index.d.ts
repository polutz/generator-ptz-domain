//Reference your interfaces:
//  /// <reference path="IEntityMinBase.d.ts" />

declare module <%= appnameStartCase %> {
    
    //How to export a class
    // class EntityMinBase implements IEntityMinBase {
    //     constructor(entity?: IEntityMinBaseArgs);

    //     id: string;
    //     errors: string[];

    //     isValid(): boolean;
    //     throwErrorIfIsInvalid(): void;
    // }

    //How to export a function
    // export function validateEmail(email): boolean;
}

declare module "<%= appname %>"
{
    export = <%= appnameStartCase %>;
}