/**
 * Represents a C# object exposed to JavaScript.
 */
declare type IDotNetObject = {
    /**
     * Invokes a synchronous method on the C# object.
     * @param {string} method - The name of the method to invoke.
     * @param {...any} args - The arguments to pass to the method.
     * @returns {any} - The result of the method invocation.
     */
    invokeMethod: (method: string, ...args: any[]) => any;

    /**
     * Invokes an asynchronous method on the C# object.
     * @param {string} method - The name of the asynchronous method to invoke.
     * @param {...any} args - The arguments to pass to the method.
     * @returns {Promise<any>} - A Promise that resolves with the result of the asynchronous method invocation.
     */
    invokeMethodAsync: (method: string, ...args: any[]) => Promise<any>;

    /**
     * Disposes of the C# object.
     * @returns {Promise<void>} - A Promise that resolves when the object is disposed.
     */
    dispose: () => Promise<void>;

    /**
     * Serializes the C# object as an argument for interop.
     * @returns {{__dotNetObject: any}} - An object with a property "__dotNetObject" containing the serialized C# object.
     */
    serializeAsArg: () => { __dotNetObject: any };

    /**
     * The identifier for the C# object.
     */
    _id: string;
};
