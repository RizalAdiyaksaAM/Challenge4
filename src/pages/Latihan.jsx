import React from "react";

export const Latihan = () => {
  return (
    <div className="w-full ">
      <div className=" flex flex-col h-screen   space-y-4  p-4">
        <div className=" h-1/5 flex justify-end ">
          <div className=" bg-red-600 mobile:w-1/3 tablet:w-full flex justify-center items-center">
            <p className="text-center text-white font-bold text-2xl">Merah</p>
          </div>
        </div>
        <div className="flex desktop:flex-row  tablet:flex-col-reverse mobile:flex-col desktop:h-full tablet:h-4/5 mobile:h-4/5 gap-4 ">
          <div className="desktop:w-1/2 tablet:w-full bg-violet-600 mobile:h-2/5 tablet:h-2/5 flex justify-center items-center  desktop:h-full  ">
            <p className="text-center text-white font-bold text-2xl">Ungu</p>
          </div>
          <div className="desktop:w-1/2 tablet:w-full h-full gap-4   flex mobile:flex-col-reverse tablet:flex-col ">
            <div className="bg-green-600 h-3/5 flex justify-center items-center">
              <p className="text-center text-white font-bold text-2xl">Hijau</p>
            </div>
            <div className="flex  gap-4  h-2/5 flex mobile:flex-row-reverse tablet:flex-row ">
              <div className="desktop:bg-blue-600 tablet:bg-pink-600 mobile:bg-blue-600 w-1/2 flex justify-center items-center ">
                <p className="text-center text-white font-bold text-2xl">
                  Biru
                </p>
              </div>
              <div className="bg-pink-600 w-1/2 flex justify-center items-center ">
                <p className="text-center text-white font-bold text-2xl">
                  Pink
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
