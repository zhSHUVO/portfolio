import remc from "../../../Images/remc/remc.png";
import remc1 from "../../../Images/remc/remc1.png";
import remc2 from "../../../Images/remc/remc2.png";
import remc4 from "../../../Images/remc/remc4.png";

const Remc = () => {
    return (
        <div>
            <div className="grid place-items-center">
                <div className="grid grid-cols-3 gap-4 p-5 max-w-screen-lg">
                    <div className=" rounded-lg col-span-3">
                        <img src={remc} alt="" />
                    </div>
                    <div className=" rounded-lg col-span-2">
                        <img src={remc1} alt="" />
                    </div>
                    <div className=" rounded-lg row-span-2">
                        <img src={remc4} alt="" />
                    </div>
                    <div className=" rounded-lg col-span-2">
                        <img src={remc2} alt="" />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Remc;
