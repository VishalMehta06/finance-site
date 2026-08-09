import financeData from "../../assets/finance-data.svg"

function Banner() {
    return (
        <>
            <div className="flex p-6">
                <div className="w-1/2 flex justify-center items-center">
                    <img src={financeData} className="w-3/4 h-3/4"/>
                </div>
                <div className="w-1/2 flex flex-col justify-center gap-4 text-text">
                    <h1 className="text-4xl font-bold">
                        Change Your Financial Future!
                    </h1>
                    <p className="text-muted">
                        This website contains the secrets to financial freedom, venture if you dare.
                    </p>
                    <div className="flex gap-10 text-text-2">
                        <a href="/foundation">
                            <button className="px-4 py-2 rounded-md cursor-pointer bg-button border border-solid border-border">
                                Get Started
                            </button>
                        </a>
                        <a href="/tools">
                        <button className="px-4 py-2 rounded-md cursor-pointer bg-button border border-solid border-border">
                            Free Tools
                        </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;