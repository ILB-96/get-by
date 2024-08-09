import { Group } from "@prisma/client";
import React from "react";
import GroupCard from "./group-card";

interface GroupListProps {
  groups: Group[];
}

const GroupList: React.FC<GroupListProps> = ({ groups }) => {
  return (
    <>
      {groups.map((group: Group) => (
        <GroupCard key={group.id} {...group} />
      ))}
    </>
  );
};

export default GroupList;
