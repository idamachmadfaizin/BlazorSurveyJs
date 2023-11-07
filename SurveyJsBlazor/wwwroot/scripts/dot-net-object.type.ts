/**
 * Represents a C# object exposed to JavaScript.
 */
export type DotNetObjectType = {
    /**
     * Invokes a synchronous method on the C# object.
     * @param method The name of the method to invoke.
     * @param args The arguments to pass to the method.
     * @returns The result of the method invocation.
     */
    invokeMethod: (method: string, ...args: any[]) => any;

    /**
     * Invokes an asynchronous method on the C# object.
     * @param method The name of the asynchronous method to invoke.
     * @param args The arguments to pass to the method.
     * @returns A Promise that resolves with the result of the asynchronous method invocation.
     */
    invokeMethodAsync: (method: string, ...args: any[]) => Promise<any>;

    /**
     * Disposes of the C# object.
     * @returns A Promise that resolves when the object is disposed.
     */
    dispose: () => Promise<void>;

    /**
     * Serializes the C# object as an argument for interop.
     * @returns An object with a property "__dotNetObject" containing the serialized C# object.
     */
    serializeAsArg: () => { __dotNetObject: any };

    /**
     * The identifier for the C# object.
     */
    _id: string;
};

export type IDotNetObject = {
    dotNetObject: DotNetObjectType;
}