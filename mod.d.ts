
export type { InitializationFunction , _Interpreter as Interpreter }

type InitializationFunction = (
    interpreter : InstanceType<Interpreter> ,
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

    initGlobal (
        object : any
    ) : void
}


declare global {
    var Interpreter : typeof _Interpreter
}
