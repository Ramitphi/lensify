import React from "react";

interface Props {
  lenspfp: string;
  lensid: string;
}
const CallUserCard: React.FC<Props> = ({ lenspfp, lensid }) => {
  return (
    <div className="m-5 w-56 flex items-center gap-3 border border-brandbutton rounded-md">
      <div className="flex flex-col">
        <p className="text-brandbutton">{lensid}</p>
        <p className="text-green-600">4:30</p>
      </div>
    </div>
  );
};

export default CallUserCard;
