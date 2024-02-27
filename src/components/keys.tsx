function Keys(){
    return(
        <div className="flex flex-wrap">
            <span className="flex flex-wrap w-60">
                <button className="w-40 h-16 flex-none bg-white align-top border">AC</button>
                <button className="w-20 h-16 flex-none bg-white align-top border">/</button>
                <button className="w-20 h-16 flex-none bg-white align-top border">7</button>
                <button className="w-20 h-16 flex-none bg-white align-top border">8</button>
                <button className="w-20 h-16 flex-none bg-white align-top border">9</button>
                <button className="w-20 h-16 flex-none bg-white align-top border">4</button>
                <button className="w-20 h-16 flex-none bg-white align-top border">5</button>
                <button className="w-20 h-16 flex-none bg-white align-top border">6</button>
                <button className="w-20 h-16 flex-none bg-white align-top border">1</button>
                <button className="w-20 h-16 flex-none bg-white align-top border">2</button>
                <button className="w-20 h-16 flex-none bg-white align-top border">3</button>
                <button className="w-40 h-16 flex-none bg-white align-top border">0</button>
                <button className="w-20 h-16 flex-none bg-white align-top border">.</button>
            </span>
            <span className="flex flex-col w-20 flex-wrap">
                <button className="block w-20 h-16 flex-none bg-white align-top border">x</button>
                <button className="block w-20 h-16 flex-none bg-white align-top border">-</button>
                <button className="block w-20 h-16 flex-none bg-white align-top border">+</button>
                <button className="block w-20 h-32 flex-none bg-white align-top border">=</button>
            </span>
        </div>
    )
}

export default Keys;