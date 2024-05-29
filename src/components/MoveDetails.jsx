import React from "react";

const MoveDetails = ({ move }) => {
  return (
    <div className="mt-4">
      <h4 className="text-lg font-semibold">Move Items</h4>
      <ul className="list-disc list-inside">
        {move.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default MoveDetails;
