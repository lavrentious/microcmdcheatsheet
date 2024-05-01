import clsx from "clsx";
import React from "react";
import { Tooltip } from "./bitTooltips";
import "./tooltipsTable.css";
interface TooltipsListProps {
  tooltips: Tooltip[];
  bits: boolean[];
}

const TooltipsListItem: React.FC<{ tooltip: Tooltip; active: boolean }> = ({
  tooltip,
  active,
}) => {
  return (
    <tr className={clsx({ active: active })}>
      <td>{tooltip.bit}</td>
      <td>{tooltip.mnemonic}</td>
      <td>{tooltip.comment}</td>
    </tr>
  );
};

const TooltipsList: React.FC<TooltipsListProps> = ({ tooltips, bits }) => {
  return (
    <table className="tooltips-table">
      <thead>
        <th>Номер бита</th>
        <th>Мнемоника</th>
        <th>Комментарий</th>
      </thead>
      <tbody>
        {tooltips.map((tooltip) => (
          <TooltipsListItem tooltip={tooltip} active={bits[tooltip.bit]} />
        ))}
      </tbody>
    </table>
  );
};

export default TooltipsList;
