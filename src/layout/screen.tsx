import { useReducer } from "react";

interface State{
    operation: string,
    numbers: number[],
    operations: string[]
}

type Action = {type: '1'} | {type: '2'} | {type: '3'} | {type: '4'} | {type: '5'} | {type: '6'} | {type: '7'} | {type: '8'} | {type: '9'} | {type: '0'} | {type: '+'} | {type: '*'} | {type: '/'} | {type: '-'} | {type: '.'};

const reducer = (state: State, action: Action): State =>{
    switch (action.type){
        case '1':
            return{
                operation: state.operation+'1',
                numbers: state.numbers,
                operations: state.operations
            }
        
        case '2':
            return{
                operation: state.operation+'2',
                numbers: state.numbers,
                operations: state.operations
            }

        case '3':
            return{
                operation: state.operation+'3',
                numbers: state.numbers,
                operations: state.operations
            }

        case '4':
            return{
                operation: state.operation+'4',
                numbers: state.numbers,
                operations: state.operations
            }
            
        case '5':
            return{
                operation: state.operation+'5',
                numbers: state.numbers,
                operations: state.operations
            }
        
        case '6':
            return{
                operation: state.operation+'6',
                numbers: state.numbers,
                operations: state.operations
            }
        
        case '7':
            return{
                operation: state.operation+'6',
                numbers: state.numbers,
                operations: state.operations
            }
        
        case '8':
            return{
                operation: state.operation+'8',
                numbers: state.numbers,
                operations: state.operations
            }
        
        case '9':
            return{
                operation: state.operation+'9',
                numbers: state.numbers,
                operations: state.operations
            }
            
        case '0':
            return{
                operation: state.operation+'0',
                numbers: state.numbers,
                operations: state.operations
            }

        case '+':
            return{
                operation: state.operation+'+',
                numbers: state.numbers,
                operations: state.operations
            }
        
        case '-':
            return{
                operation: state.operation+'-',
                numbers: state.numbers,
                operations: state.operations
            }

        case '/':
            return{
                operation: state.operation+'/',
                numbers: state.numbers,
                operations: state.operations
            }

        case '*':
            return{
                operation: state.operation+'*',
                numbers: state.numbers,
                operations: state.operations
            }
        
        case '.':
            return{
                operation: state.operation+'.',
                numbers: state.numbers,
                operations: state.operations
            }
        
    }
}

function Screen(){
    
    const initialState: State = {operation: '', numbers: [], operations: []};

    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <div className="w-auto place-content-center h-auto bg-black p-2">
            <div className="w-80 h-auto">
                <div className="h-5 w-80 text-yellow-100">
                    {state.operation}
                </div>
                <div className="w-80 h-10 text-yellow-100">

                </div>

            </div>
            <div className="flex flex-wrap">
                <span className="flex flex-wrap w-60">
                    <button className="w-40 h-16 flex-none bg-white align-top border">AC</button>
                    <button className="w-20 h-16 flex-none bg-white align-top border" onClick={() => {dispatch({ type: '/' })}}>/</button>
                    <button className="w-20 h-16 flex-none bg-white align-top border" onClick={() => {dispatch({ type: '7' })}}>7</button>
                    <button className="w-20 h-16 flex-none bg-white align-top border" onClick={() => {dispatch({ type: '8' })}}>8</button>
                    <button className="w-20 h-16 flex-none bg-white align-top border" onClick={() => {dispatch({ type: '9' })}}>9</button>
                    <button className="w-20 h-16 flex-none bg-white align-top border" onClick={() => {dispatch({ type: '4' })}}>4</button>
                    <button className="w-20 h-16 flex-none bg-white align-top border" onClick={() => {dispatch({ type: '5' })}}>5</button>
                    <button className="w-20 h-16 flex-none bg-white align-top border" onClick={() => {dispatch({ type: '6' })}}>6</button>
                    <button className="w-20 h-16 flex-none bg-white align-top border" onClick={() => {dispatch({ type: '1' })}}>1</button>
                    <button className="w-20 h-16 flex-none bg-white align-top border" onClick={() => {dispatch({ type: '2' })}}>2</button>
                    <button className="w-20 h-16 flex-none bg-white align-top border" onClick={() => {dispatch({ type: '3' })}}>3</button>
                    <button className="w-40 h-16 flex-none bg-white align-top border" onClick={() => {dispatch({ type: '4' })}}>0</button>
                    <button className="w-20 h-16 flex-none bg-white align-top border" onClick={() => {dispatch({ type: '.' })}}>.</button>
                </span>
                <span className="flex flex-col w-20 flex-wrap">
                    <button className="block w-20 h-16 flex-none bg-white align-top border" onClick={() => {dispatch({ type: '*' })}}>x</button>
                    <button className="block w-20 h-16 flex-none bg-white align-top border" onClick={() => {dispatch({ type: '-' })}}>-</button>
                    <button className="block w-20 h-16 flex-none bg-white align-top border" onClick={() => {dispatch({ type: '+' })}}>+</button>
                    <button className="block w-20 h-32 flex-none bg-white align-top border">=</button>
                </span>
            </div>
        </div>
    )
}

export default Screen;