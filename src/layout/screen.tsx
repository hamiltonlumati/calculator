import { useReducer } from "react";
interface State{
    operation: string,
    numbers: number[],
    operations: number[],
    number: string,
    result: string
}

type Action = {type: 'AC'} | {type: '='} | {type: '1'} | {type: '2'} | {type: '3'} | {type: '4'} | {type: '5'} | {type: '6'} | {type: '7'} | {type: '8'} | {type: '9'} | {type: '0'} | {type: '+'} | {type: '*'} | {type: '/'} | {type: '-'} | {type: '.'};


const reducer = (state: State, action: Action): State =>{
    var operationLenght: number = state.operation.length;
    switch (action.type){
        case 'AC':
            return{
                number: '',
                operation: '0',
                numbers: [],
                operations: [0],
                result: ''
            }

        case '1':
            if(state.result != ''){
                state.operation = '';
                state.number = '';
                state.numbers = [];
            }
            if(state.operation == '0'){
                state.operation = '';
                state.number = '';
            }
            return{
                operation: state.operation+'1',
                number: state.number+'1',
                numbers: state.numbers,
                operations: state.operations,
                result: ''
            }
        
        case '2':
            if(state.result != ''){
                state.operation = '';
                state.number = '';
                state.numbers = [];
            }
            if(state.operation == '0'){
                state.operation = '';
                state.number = '';
            }

            return{
                operation: state.operation+'2',
                number: state.number+'2',
                numbers: state.numbers,
                operations: state.operations,
                result: ''
            }

        case '3':
            if(state.result != ''){
                state.operation = '';
                state.number = '';
                state.numbers = [];
            }
            if(state.operation == '0'){
                state.operation = '';
                state.number = '';
            }

            return{
                operation: state.operation+'3',
                number: state.number+'3',
                numbers: state.numbers,
                operations: state.operations,
                result: ''
            }

        case '4':
            if(state.result != ''){
                state.operation = '';
                state.number = '';
                state.numbers = [];
            }
            if(state.operation == '0'){
                state.operation = '';
                state.number = '';
            }

            return{
                operation: state.operation+'4',
                number: state.number+'4',
                numbers: state.numbers,
                operations: state.operations,
                result: ''
            }
            
        case '5':
            if(state.result != ''){
                state.operation = '';
                state.number = '';
                state.numbers = [];
            }
            if(state.operation == '0'){
                state.operation = '';
                state.number = '';
            }

            return{
                operation: state.operation+'5',
                number: state.number+'5',
                numbers: state.numbers,
                operations: state.operations,
                result: ''
            }
        
        case '6':
            if(state.result != ''){
                state.operation = '';
                state.number = '';
                state.numbers = [];
            }
            if(state.operation == '0'){
                state.operation = '';
                state.number = '';
            }
            return{
                operation: state.operation+'6',
                number: state.number+'6',
                numbers: state.numbers,
                operations: state.operations,
                result: ''
            }
        
        case '7':
            if(state.result != ''){
                state.operation = '';
                state.number = '';
                state.numbers = [];
            }
            if(state.operation == '0'){
                state.operation = '';
                state.number = '';
            }

            return{
                operation: state.operation+'7',
                number: state.number+'7',
                numbers: state.numbers,
                operations: state.operations,
                result: ''
            }
        
        case '8':
            if(state.result != ''){
                state.operation = '';
                state.number = '';
                state.numbers = [];
            }
            if(state.operation == '0'){
                state.operation = '';
                state.number = '';
            }

            return{
                operation: state.operation+'8',
                number: state.number+'8',
                numbers: state.numbers,
                operations: state.operations,
                result: ''
            }
        
        case '9':
            if(state.result != ''){
                state.operation = '';
                state.number = '';
                state.numbers = [];
            }
            if(state.operation == '0'){
                state.operation = '';
            }

            return{
                operation: state.operation+'9',
                number: state.number+'9',
                numbers: state.numbers,
                operations: state.operations,
                result: ''
            }
            
        case '0':
            if( state.operation[operationLenght-1] == '0'){
                return{
                    operation: state.operation,
                    number: state.number,
                    numbers: state.numbers,
                    operations: state.operations,
                    result: ''
                }
            }
            if(state.result != ''){
                state.operation = '';
                state.number = '';
                state.numbers = [];
            }
            return{
                operation: state.operation+'0',
                number: state.number+'0',
                numbers: state.numbers,
                operations: state.operations,
                result: ''
            }

        case '+':
            if( state.operation[operationLenght-1] == '/' || state.operation[operationLenght-1] == '+' || state.operation[operationLenght-1] == '-' || state.operation[operationLenght-1] == '*'){
                return{
                    operation: state.operation,
                    number: state.number,
                    numbers: state.numbers,
                    operations: state.operations,
                    result: ''
                }
            }
            if(state.result != ''){
                state.operation = state.result;
                state.operations.push(0);
            }else if(state.operation.length > 0){
                state.operations.push(0);
                state.numbers.push(parseFloat(state.number));    
            }
            return{
                operation: state.operation+'+',
                number: '+',
                numbers: state.numbers,
                operations: state.operations,
                result: ''
            }
        
        case '-':
            if(state.operation[operationLenght-1] == '/' || state.operation[operationLenght-1] == '+' || state.operation[operationLenght-1] == '-' || state.operation[operationLenght-1] == '*'){
                return{
                    operation: state.operation,
                    number: state.number,
                    numbers: state.numbers,
                    operations: state.operations,
                    result: ''
                }
            }
            if(state.result != ''){
                state.operation = state.result;
                state.operations.push(0);
            }else if(state.operation.length > 0){
                state.operations.push(0);
                state.numbers.push(parseFloat(state.number));    
            }
            return{
                operation: state.operation+'-',
                number: '-',
                numbers: state.numbers,
                operations: state.operations,
                result: ''
            }

        case '*':
            if(operationLenght == 0 || state.operation[operationLenght-1] == '/' || state.operation[operationLenght-1] == '+' || state.operation[operationLenght-1] == '-' || state.operation[operationLenght-1] == '*'){
                return{
                    operation: state.operation,
                    number: state.number,
                    numbers: state.numbers,
                    operations: state.operations,
                    result: ''
                }
            }

            if(state.result != ''){
                state.operation = state.result;
                state.operations.push(1);
            }else if(state.operation.length > 0){
                state.operations.push(1);
                state.numbers.push(parseFloat(state.number));    
            }
            return{
                operation: state.operation+'*',
                numbers: state.numbers,
                number: '',
                operations: state.operations,
                result: ''
            }

        case '/':
            if(operationLenght == 0 || state.operation[operationLenght-1] == '/' || state.operation[operationLenght-1] == '+' || state.operation[operationLenght-1] == '-' || state.operation[operationLenght-1] == '*'){
                return{
                    operation: state.operation,
                    number: state.number,
                    numbers: state.numbers,
                    operations: state.operations,
                    result: ''
                }
            }
            if(state.result != ''){
                state.operation = state.result;
                state.operations.push(2);
            }else if(state.operation.length > 0){
                state.operations.push(2);
                state.numbers.push(parseFloat(state.number));    
            }
            return{
                operation: state.operation+'/',
                number: '',
                numbers: state.numbers,
                operations: state.operations,
                result: ''
            }
        
        case '.':
            if(operationLenght == 0 || state.operation[operationLenght-1] == '/' || state.operation[operationLenght-1] == '+' || state.operation[operationLenght-1] == '-' || state.operation[operationLenght-1] == '*' || state.operation[operationLenght] == '.'){
                return{
                    operation: state.operation,
                    number: state.number,
                    numbers: state.numbers,
                    operations: state.operations,
                    result: ''
                }
            }
            return{
                operation: state.operation+'.',
                number: state.number+'.',
                numbers: state.numbers,
                operations: state.operations,
                result: ''
            }

        case '=':
            state.numbers.push(parseFloat(state.number));
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
                operations: [0],
                result: String(state.numbers[0])
            }
        
    }
}

function Screen(){
    
    const initialState: State = {operation: '0', numbers: [], operations: [0], number: '', result: ''};

    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <div className="w-auto place-content-center h-auto bg-black p-2">
            <div className="w-80 h-auto overflow-x-auto" id="display">
                <div className="h-5 w-80 text-yellow-100">
                    {state.operation}
                </div>
                <div className="w-80 h-10 text-yellow-100">
                </div>
            </div>
            <div id="keyboard" className="flex flex-wrap text-sm mb-4">
                <span className="flex flex-wrap w-60">
                    <button id="clear" className="font-medium w-40 h-16 flex-none bg-red-500 align-top border hover:border-black" onClick={() => {dispatch({ type: 'AC' })}}>AC</button>
                    <button id="divide" className="font-medium w-20 h-16 flex-none bg-white align-top border hover:border-black" onClick={() => {dispatch({ type: '/' })}}>/</button>
                    <button id="seven" className="font-medium w-20 h-16 flex-none bg-white align-top border hover:border-black" onClick={() => {dispatch({ type: '7' })}}>7</button>
                    <button id="eight" className="font-medium w-20 h-16 flex-none bg-white align-top border hover:border-black" onClick={() => {dispatch({ type: '8' })}}>8</button>
                    <button id="nine" className="font-medium w-20 h-16 flex-none bg-white align-top border hover:border-black" onClick={() => {dispatch({ type: '9' })}}>9</button>
                    <button id="four" className="font-medium w-20 h-16 flex-none bg-white align-top border hover:border-black" onClick={() => {dispatch({ type: '4' })}}>4</button>
                    <button id="five" className="font-medium w-20 h-16 flex-none bg-white align-top border hover:border-black" onClick={() => {dispatch({ type: '5' })}}>5</button>
                    <button id="six" className="font-medium w-20 h-16 flex-none bg-white align-top border hover:border-black" onClick={() => {dispatch({ type: '6' })}}>6</button>
                    <button id="one" className="font-medium w-20 h-16 flex-none bg-white align-top border hover:border-black" onClick={() => {dispatch({ type: '1' })}}>1</button>
                    <button id="two" className="font-medium w-20 h-16 flex-none bg-white align-top border hover:border-black" onClick={() => {dispatch({ type: '2' })}}>2</button>
                    <button id="three" className="font-medium w-20 h-16 flex-none bg-white align-top border hover:border-black" onClick={() => {dispatch({ type: '3' })}}>3</button>
                    <button id="zero" className="font-medium w-40 h-16 flex-none bg-white align-top border hover:border-black" onClick={() => {dispatch({ type: '0' })}}>0</button>
                    <button id="decimal" className="font-medium w-20 h-16 flex-none bg-white align-top border hover:border-black" onClick={() => {dispatch({ type: '.' })}}>.</button>
                </span>
                <span className="flex flex-col w-20 flex-wrap">
                    <button id="multiply" className="font-medium block w-20 h-16 flex-none bg-white align-top border hover:border-black" onClick={() => {dispatch({ type: '*' })}}>x</button>
                    <button id="subtract" className="font-medium block w-20 h-16 flex-none bg-white align-top border hover:border-black" onClick={() => {dispatch({ type: '-' })}}>-</button>
                    <button id="add" className="font-medium block w-20 h-16 flex-none bg-white align-top border hover:border-black" onClick={() => {dispatch({ type: '+' })}}>+</button>
                    <button id="equals" className="font-medium block w-20 h-32 flex-none bg-blue-500 align-top border hover:border-black" onClick={() => {dispatch({ type: '=' })}}>=</button>
                </span>
            </div>
            <div className="text-white text-center mt-3"><a className="text-orange-500" href="https://github.com/hamiltonlumati">By Hamilton Lumati</a></div>
        </div>
    )
}

export default Screen;