import Keys from "../components/keys";
import Display from "../components/display";

function Screen(){
    return(
        <div className="w-auto place-content-center h-auto bg-black p-2">
            <Display />
            <Keys />
        </div>
    )
}

export default Screen;