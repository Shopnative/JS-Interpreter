
export type { InitializationFunction , _Interpreter as Interpreter }

type InitializationFunction = (
    interpreter : Interpreter ,
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
    ) : undefined | (() => void)
}


declare global {
    var Interpreter : typeof _Interpreter
}
