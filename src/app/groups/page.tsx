import { getGroupsAction } from "@/actions/group-action";
import GroupList from "@/components/groups/group-list";
import { MainContainer, SectionContainer } from "@/styles/style";
import { Group } from "@prisma/client";
import React from "react";

const Groups = async () => {
  const groups: Group[] = await getGroupsAction();

  return (
    <MainContainer>
      <SectionContainer>
        <GroupList groups={groups} />
      </SectionContainer>
    </MainContainer>
  );
};

export default Groups;
