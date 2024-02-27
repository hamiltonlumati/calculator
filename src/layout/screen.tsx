import Keys from "../components/keys";
import Display from "../components/display";

function Screen(){
    return(
        <div className="w-auto place-content-center h-auto bg-black p-4">
            <Display />
            <Keys />
        </div>
    )
}

export default Screen;