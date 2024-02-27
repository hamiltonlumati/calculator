import Keys from "../components/keys";
import Display from "../components/display";

function Screen(){
    return(
        <div className="w-96 h-96 bg-black p-4">
            <Display />
            <Keys />
        </div>
    )
}

export default Screen;