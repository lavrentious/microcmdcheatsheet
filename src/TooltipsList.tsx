import clsx from "clsx";
import React from "react";
import { Tooltip } from "./bitTooltips";
import "./tooltipsTable.css";
interface TooltipsListProps {
  tooltips: Tooltip[];
  bits: boolean[];
}

const TooltipsListItem: React.FC<
  { tooltip: Tooltip; active: boolean } & React.ComponentPropsWithRef<"tr">
> = ({ tooltip, active, ...props }) => {
  return (
    <tr
      className={clsx({ active: active, ...[props.className] })}
      key={tooltip.bit + tooltip.mnemonic}
      {...props}
    >
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
        <tr>
          <th>Номер бита</th>
          <th>Мнемоника</th>
          <th>Комментарий</th>
        </tr>
      </thead>
      <tbody>
        {tooltips.map((tooltip) => (
          <TooltipsListItem
            tooltip={tooltip}
            active={bits[tooltip.bit]}
            key={tooltip.bit + tooltip.mnemonic}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TooltipsList;
