"use client";
import { Group } from "@prisma/client";
import React from "react";
import styled from "styled-components";

import { Icons } from "@/components/icons";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Button } from "../ui/button";
const Card = styled(Collapsible)`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-width: 600px;
  padding: 16px;
  margin: 16px auto;
  transition: transform 0.2s;
`;

const Field = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #333;
`;

const Icon = styled.div`
  margin-right: 8px;
  color: #007bff;
`;

const GroupCard = (group: Group) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Card open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="w-full p-0 justify-start flex flex-col h-fit"
        >
          <Field className="w-full flex justify-between">
            <Field className="font-semibold">{group.name}</Field>
            <Field>
              <Icon>
                <Icons.Globe />
              </Icon>
              {group.country}
            </Field>
            <Field>
              <Icon>
                <Icons.Calendar />
              </Icon>
              {group.expireAt.toISOString().split("T")[0]}
            </Field>
          </Field>
          <Field className="w-full flex justify-end space-x-4">
            <Field>
              <Icon>
                <Icons.Tags />
              </Icon>
              {group.category}
            </Field>
            <Field>
              <Icon>
                <Icons.Tags />
              </Icon>
              {group.subCategory}
            </Field>
          </Field>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2">
        <Field className="w-full bg-surface rounded-xs px-4 py-2">
          {group.description}
        </Field>
        Users
        {group.userIds.map((user) => (
          <Field key={user}>
            <Icon>
              <Icons.User />
            </Icon>
            {group.userIds}
          </Field>
        ))}
      </CollapsibleContent>
    </Card>
  );
};

export default GroupCard;
