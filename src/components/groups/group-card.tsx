import { Group } from "@prisma/client";
import React from "react";

const GroupCard = (group: Group) => {
  return (
    <div>
      <div>{group.name}</div>
      <div>{group.description}</div>
      <div>{group.country}</div>
      <div>{group.category}</div>
      <div>{group.subCategory}</div>
      <div>{group.userIds}</div>
      <div>{group.expireAt.toString()}</div>
    </div>
  );
};

export default GroupCard;
