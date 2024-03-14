import Title from "../ui/Title"

function Download() {
    return (
        <div className="grid lg:grid-cols-2 bg-[url('download-bg.png')] bg-no-repeat bg-left">
            <div className="grid grid-rows-4 py-20 justify-center">
                <div className="flex items-center justify-center lg:justify-start">
                    <Title content={"DOWNLOAD"}/>
                </div>
                <div>
                    <img src="./download-sologan.png"/>
                </div>
                <div className="self-center max:lg:justify-self-center">
                    <p>For faster, easier booking and exclusive deals.</p>
                </div>
                <div>
                    <div className="flex justify-around lg:justify-start lg:items-start gap-5">
                    <img src="./get-google.png" className="h-[50px]"/>
                    <img src="./get-ios.png" className="h-[50px]"/>
                    </div>
                </div>
            </div>
            <div className="flex items-end justify-center">
                <img src="./download.png"/>
            </div>
        </div>
    )
}

export default Download
