
export type { InitializationFunction , _Interpreter as Interpreter }

type InitializationFunction = (
    interpreter : _Interpreter ,
    global : any
) => void


declare class _Interpreter {

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

    static NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR : object
    static READONLY_NONENUMERABLE_DESCRIPTOR : object
    static NONENUMERABLE_DESCRIPTOR : object
    static READONLY_DESCRIPTOR : object
    static VARIABLE_DESCRIPTOR : object
}


declare global {
    var Interpreter : typeof _Interpreter
}
