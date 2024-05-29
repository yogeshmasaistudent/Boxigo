import React, { useEffect, useState } from "react";
import { fetchData } from "../services/api";
import MoveDetails from "../components/MoveDetails";
import { IoMdHome } from "react-icons/io";
import { GiPathDistance } from "react-icons/gi";
import { FaCouch, FaEdit, FaExclamationCircle } from "react-icons/fa";
import { BsArrowRightCircle } from "react-icons/bs";
import { MdOutlineFireTruck } from "react-icons/md";

const MyMoves = () => {
  const [moves, setMoves] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setMoves(result.Customer_Estimate_Flow);
      } catch (error) {
        setError("Failed to fetch data");
      }
    };

    getData();
  }, []);

  
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">My Moves</h2>
      {moves.map((move, index) => (
        <div key={index} className="mb-6 border p-5 rounded shadow-md bg-white">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <p className="text-sm font-bold">From:</p>
              <p className="text-sm ml-2">{move.moving_from}</p>
              <BsArrowRightCircle className="mx-2 w-12" />
              <p className="text-sm font-bold">To:</p>
              <p className="text-sm ml-2">{move.moving_to}</p>
            </div>
            <div className="text-right">
              <h3 className="text-lg font-semibold text-red-500">
                Request#: {move.estimate_id}
              </h3>
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <IoMdHome className="text-red-500 mr-1" />
              {move.property_size}
            </div>
            <div className="flex items-center">
              <FaCouch className="text-red-500 mr-1" />
              {move.total_items}
            </div>
            <div className="flex items-center">
              <GiPathDistance className="text-red-500 mr-1" />
              {move.distance}
            </div>
            <div className="flex items-center">
              <MdOutlineFireTruck className="text-red-500 mr-1" />
              {move.date_created}
              <FaEdit className="text-red-500 w-30 m-4" />
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="text-red-500" />
              <span className="text-gray-500">Is flexible</span>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-zinc-300	 text-red-500 px-4 py-2 rounded flex items-center mr-2">
              <BsArrowRightCircle className="mr-2" />
              {move.showDetails ? "Hide Move Details" : "View Move Details"}
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded">
              Quotes Awaiting
            </button>
          </div>
          {move.showDetails && <MoveDetails move={move} />}
          <div className="text-sm text-gray-500 mt-2 flex items-center">
            <FaExclamationCircle className="text-red-500 mr-1" />
            <span>
              Disclaimer: Please update your move date before two days of
              shifting.
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyMoves;
