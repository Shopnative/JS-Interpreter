
export type { InitializationFunction }

type InitializationFunction = (
    interpreter : Interpreter ,
    global : any
) => void


declare class Interpreter {

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
    var Interpreter : typeof Interpreter
}
