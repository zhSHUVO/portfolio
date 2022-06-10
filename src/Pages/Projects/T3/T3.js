import t3 from "../../../Images/t3/t3.png";
import t31 from "../../../Images/t3/t31.png";
import t32 from "../../../Images/t3/t32.png";
import t33 from "../../../Images/t3/t33.png";

const T3 = () => {
    return (
        <div>
            <div className="grid place-items-center">
                <div className="grid grid-cols-3 gap-4 p-5 max-w-screen-lg">
                    <div className=" rounded-lg col-span-3">
                        <img src={t3} alt="" />
                    </div>
                    <div className=" rounded-lg col-span-2">
                        <img src={t31} alt="" />
                    </div>
                    <div className=" rounded-lg row-span-2">
                        <img src={t33} alt="" />
                    </div>
                    <div className=" rounded-lg col-span-2">
                        <img src={t32} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default T3;
