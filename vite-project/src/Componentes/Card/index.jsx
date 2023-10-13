const Card = () => {
    return (
        <div className="bg-black cursor-pointer w-56 h-60 rounded-lg">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/50 rounded-lg text-black text-xs m-2 p-1">
                    {" "}
                    Dispositivos{" "}
                </span>
                <img className="w-full h-full object-cover rounded-lg"
                    src="https://c8.alamy.com/compes/g0jkcx/semi-camion-con-luces-encendidas-g0jkcx.jpg"
                    alt=""
                    srcSet=""
                />
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
                    +
                </div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">Camion</span>
                <span className="text-lg font-medium">$123</span>
            </p>

        </div>
    )
}
export default Card