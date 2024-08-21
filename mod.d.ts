
export type { InitializationFunction , _Interpreter as Interpreter }

type InitializationFunction = (
    interpreter : _Interpreter ,
    global : any
) => void


declare class _Interpreter {

    readonly OBJECT_PROTO : object
    readonly value : any

    constructor (
        code : string ,
        init ?: InitializationFunction
    )

    run() : void

    setProperty (
        object : any ,
        name : string ,
        value : any ,
        descriptor ?: object
    ) : undefined | (( value : any ) => void )

    createNativeFunction (
        func : Function ,
        isContructor : boolean
    ) : object

    createObjectProto (
        prototype : object
    ) : object

    initGlobal (
        object : any
    ) : void

    pseudoToNative (
        object : any ,
        cycles ?: any
    ) : any

    static NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR : object
    static READONLY_NONENUMERABLE_DESCRIPTOR : object
    static NONENUMERABLE_DESCRIPTOR : object
    static READONLY_DESCRIPTOR : object
    static VARIABLE_DESCRIPTOR : object
    
}


declare global {
    var Interpreter : typeof _Interpreter
}
