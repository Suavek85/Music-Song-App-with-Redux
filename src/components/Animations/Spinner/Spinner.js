import React from "react";
import { RadarSpinner } from "react-epic-spinners";

const Spinner = props => {
  return (
    <div>
      {props.loading ? (
        <RadarSpinner color="red" className="mt5 mb5 center" />
      ) : null}
    </div>
  );
};

export default Spinner;
