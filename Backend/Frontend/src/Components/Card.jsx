import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="w-80 md:w-72  overflow-hidden">
        <div className="card  bg-base-200 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border p-3">
          <figure className="w-full h-52 rounded-xl bg-gray-200">
            {/* <img src={item.image} alt="Shoes" /> */}
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className={`badge badge-secondary w-fit  px-2 py-2 flex items-center ${item.type==='free'?'':'hidden'}`}>{item.type}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline px-3 py-2">${item.price}</div>
              <div className=" cursor-pointer px-4 py-2 rounded-2xl border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
