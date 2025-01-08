import React from "react";
import TableRow from "./TableRow";

function TableBody({ Participationdata, setParticipationdata }) {
  // console.log(Participationdata)

  return (
    <tbody className="text-xs ">
      {Participationdata.length > 0 ? (
        Participationdata.map((participant, index) => {
          return (
            <TableRow
              key={participant["Student Email"] || 1}
              participant={participant}
            />
          );
        })
      ) : (
        <tr className="text-lg">
          <td>No User Found</td>
        </tr>
      )}
    </tbody>
  );
}

export default TableBody;
