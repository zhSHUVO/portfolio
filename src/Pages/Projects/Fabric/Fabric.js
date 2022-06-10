import fabric from "../../../Images/fabric/fabric.png";
import fabric2 from "../../../Images/fabric/fabric2.png";
import fabric3 from "../../../Images/fabric/fabric3.png";
import fabric4 from "../../../Images/fabric/fabric4.png";

const Fabric = () => {
    return (
        <div>
            <div className="grid place-items-center">
                <div className="grid grid-cols-3 gap-4 p-5 max-w-screen-lg">
                    <div className=" rounded-lg col-span-3">
                        <img src={fabric} alt="" />
                    </div>
                    <div className=" rounded-lg col-span-2">
                        <img src={fabric3} alt="" />
                    </div>
                    <div className=" rounded-lg row-span-2">
                        <img src={fabric4} alt="" />
                    </div>
                    <div className=" rounded-lg col-span-2">
                        <img src={fabric2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fabric;
