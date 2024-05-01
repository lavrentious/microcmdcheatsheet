import React from "react";
import { Tooltip } from "./bitTooltips";
import "./tooltipsTable.css";
interface TooltipsListProps {
  tooltips: Tooltip[];
}

const TooltipsListItem: React.FC<{ tooltip: Tooltip }> = ({ tooltip }) => {
  return (
    <tr>
      <td>{tooltip.bit}</td>
      <td>{tooltip.mnemonic}</td>
      <td>{tooltip.comment}</td>
    </tr>
  );
};

const TooltipsList: React.FC<TooltipsListProps> = ({ tooltips }) => {
  return (
    <table className="tooltips-table">
      <thead>
        <th>Номер бита</th>
        <th>Мнемоника</th>
        <th>Комментарий</th>
      </thead>
      <tbody>
        {tooltips.map((tooltip) => (
          <TooltipsListItem tooltip={tooltip} />
        ))}
      </tbody>
    </table>
  );
};

export default TooltipsList;
