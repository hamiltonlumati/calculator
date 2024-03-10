import { useReducer } from "react";
import "math-from-string";
interface State{
    operation: string,
    numbers: number[],
    operations: number[],
    number: string
}

type Action = {type: 'AC'} | {type: '='} | {type: '1'} | {type: '2'} | {type: '3'} | {type: '4'} | {type: '5'} | {type: '6'} | {type: '7'} | {type: '8'} | {type: '9'} | {type: '0'} | {type: '+'} | {type: '*'} | {type: '/'} | {type: '-'} | {type: '.'};

const reducer = (state: State, action: Action): State =>{
    var operationLenght: number = state.operation.length;
    switch (action.type){
        case 'AC':
            return{
                number: '',
                operation: '',
                numbers: [],
                operations: [0],
            }

        case '1':
            return{
                operation: state.operation+'1',
                number: state.number+'1',
                numbers: state.numbers,
                operations: state.operations
            }
        
        case '2':
            return{
                operation: state.operation+'2',
                number: state.number+'2',
                numbers: state.numbers,
                operations: state.operations
            }

        case '3':
            return{
                operation: state.operation+'3',
                number: state.number+'3',
                numbers: state.numbers,
                operations: state.operations
            }

        case '4':
            return{
                operation: state.operation+'4',
                number: state.number+'4',
                numbers: state.numbers,
                operations: state.operations
            }
            
        case '5':
            return{
                operation: state.operation+'5',
                number: state.number+'5',
                numbers: state.numbers,
                operations: state.operations
            }
        
        case '6':
            return{
                operation: state.operation+'6',
                number: state.number+'6',
                numbers: state.numbers,
                operations: state.operations
            }
        
        case '7':
            return{
                operation: state.operation+'7',
                number: state.number+'7',
                numbers: state.numbers,
                operations: state.operations
            }
        
        case '8':
            return{
                operation: state.operation+'8',
                number: state.number+'8',
                numbers: state.numbers,
                operations: state.operations
            }
        
        case '9':
            return{
                operation: state.operation+'9',
                number: state.number+'9',
                numbers: state.numbers,
                operations: state.operations
            }
            
        case '0':
            
            return{
                operation: state.operation+'0',
                number: state.number+'0',
                numbers: state.numbers,
                operations: state.operations
            }

        case '+':
            if( state.operation[operationLenght-1] == '/' || state.operation[operationLenght-1] == '+' || state.operation[operationLenght-1] == '-' || state.operation[operationLenght-1] == '*'){
                return{
                    operation: state.operation,
                    number: state.number,
                    numbers: state.numbers,
                    operations: state.operations
                }
            }
            state.operations.push(0);
            state.numbers.push(parseFloat(state.number));
            return{
                operation: state.operation+'+',
                number: '+',
                numbers: state.numbers,
                operations: state.operations
            }
        
        case '-':
            if(state.operation[operationLenght-1] == '/' || state.operation[operationLenght-1] == '+' || state.operation[operationLenght-1] == '-' || state.operation[operationLenght-1] == '*'){
                return{
                    operation: state.operation,
                    number: state.number,
                    numbers: state.numbers,
                    operations: state.operations
                }
            }
            state.operations.push(0);
            state.numbers.push(parseFloat(state.number));
            console.log(state.numbers);
            console.log(state.number);
            return{
                operation: state.operation+'-',
                number: '-',
                numbers: state.numbers,
                operations: state.operations
            }

        case '*':
            if(operationLenght == 0 || state.operation[operationLenght-1] == '/' || state.operation[operationLenght-1] == '+' || state.operation[operationLenght-1] == '-' || state.operation[operationLenght-1] == '*'){
                return{
                    operation: state.operation,
                    number: state.number,
                    numbers: state.numbers,
                    operations: state.operations
                }
            }
            state.operations.push(1);
            state.numbers.push(parseFloat(state.number));
            return{
                operation: state.operation+'*',
                numbers: state.numbers,
                number: '',
                operations: state.operations
            }

        case '/':
            if(operationLenght == 0 || state.operation[operationLenght-1] == '/' || state.operation[operationLenght-1] == '+' || state.operation[operationLenght-1] == '-' || state.operation[operationLenght-1] == '*'){
                return{
                    operation: state.operation,
                    number: state.number,
                    numbers: state.numbers,
                    operations: state.operations
                }
            }
            state.operations.push(2);
            state.numbers.push(parseFloat(state.number));
            return{
                operation: state.operation+'/',
                number: '',
                numbers: state.numbers,
                operations: state.operations
            }
        
        case '.':
            if(operationLenght == 0 || state.operation[operationLenght-1] == '/' || state.operation[operationLenght-1] == '+' || state.operation[operationLenght-1] == '-' || state.operation[operationLenght-1] == '*' || state.operation[operationLenght] == '.'){
                return{
                    operation: state.operation,
                    number: state.number,
                    numbers: state.numbers,
                    operations: state.operations
                }
            }
            return{
                operation: state.operation+'.',
                number: state.number+'.',
                numbers: state.numbers,
                operations: state.operations
            }

        case '=':
            state.numbers.push(parseFloat(state.number));
            console.log(state.numbers);
            let auxiliar: number = 0;
            for(let i = 0; i<state.operations.length; i++){
                switch (state.operations[i]){
                    case 1:
                        auxiliar = state.numbers[i-1]*state.numbers[i];
                        state.numbers[i-1] = auxiliar;
                        state.numbers.splice(i, 1);
                        state.operations.splice(i, 1);
                        i = 0;
                        auxiliar = 0;
                        break;

                    case 2:
                        auxiliar = state.numbers[i-1]/state.numbers[i];
                        state.numbers[i-1] = auxiliar;
                        state.numbers.splice(i, 1);
                        state.operations.splice(i, 1);
                        i = 0;
                        auxiliar = 0;
                }
            }
            for(let i = 0; i<state.numbers.length; i++){
                console.log(state.numbers);
                if(state.numbers.length > 1){
                    auxiliar = state.numbers[i] + state.numbers[i+1];
                    state.numbers[i] = auxiliar;
                    state.numbers.splice(i+1, 1);
                    i=0;
                }
            }

            return{
                operation: state.operation+'='+state.numbers[0],
                number: state.number,
                numbers: state.numbers,
                operations: state.operations
            }
        
    }
}

function Screen(){
    
    const initialState: State = {operation: '', numbers: [], operations: [0], number: ''};

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
                    <button className="w-40 h-16 flex-none bg-white align-top border" onClick={() => {dispatch({ type: 'AC' })}}>AC</button>
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
                    <button className="w-40 h-16 flex-none bg-white align-top border" onClick={() => {dispatch({ type: '0' })}}>0</button>
                    <button className="w-20 h-16 flex-none bg-white align-top border" onClick={() => {dispatch({ type: '.' })}}>.</button>
                </span>
                <span className="flex flex-col w-20 flex-wrap">
                    <button className="block w-20 h-16 flex-none bg-white align-top border" onClick={() => {dispatch({ type: '*' })}}>x</button>
                    <button className="block w-20 h-16 flex-none bg-white align-top border" onClick={() => {dispatch({ type: '-' })}}>-</button>
                    <button className="block w-20 h-16 flex-none bg-white align-top border" onClick={() => {dispatch({ type: '+' })}}>+</button>
                    <button className="block w-20 h-32 flex-none bg-white align-top border" onClick={() => {dispatch({ type: '=' })}}>=</button>
                </span>
            </div>
        </div>
    )
}

export default Screen;