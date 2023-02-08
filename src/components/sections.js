import React, { useState } from "react";
import { Icon, VoiceIcon, PlantIcon, DiscipleIcon, ThumbsIcon } from "./icon";
export const Sections = (props) => {
  // const [activeItem, setActiveItem] = useState("liveTheNewLife");
  return (
    <li
      onClick={() => {
        props.activeItemClick(props.itemName);
      }}
      className={`flex w-full justify-between cursor-pointer items-center mb-6 ${
        props.activeItem === `${props.itemName}`
          ? "text-gray-300"
          : "text-gray-600 hover:text-gray-500"
      }`}
    >
      <div className="flex items-center">
        {props.icon}
        <span className="text-sm  ml-2">{props.title}</span>
      </div>
    </li>
  );
};
