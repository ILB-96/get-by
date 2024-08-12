"use client";
import { Group } from "@prisma/client";
import React from "react";
import styled from "styled-components";

import { Icons } from "@/components/icons";
const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  max-width: 400px;
  margin: 16px auto;
  transition: transform 0.2s;
`;

const Field = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 16px;
  color: #333;
`;

const Icon = styled.div`
  margin-right: 8px;
  color: #007bff;
`;

const GroupCard = (group: Group) => {
  return (
    <Card>
      <Field>
        <Icon>
          <Icons.User />
        </Icon>
        <div>{group.name}</div>
      </Field>
      <Field>
        <Icon>
          <Icons.List />
        </Icon>
        <div>{group.description}</div>
      </Field>
      <Field>
        <Icon>
          <Icons.Globe />
        </Icon>
        <div>{group.country}</div>
      </Field>
      <Field>
        <Icon>
          <Icons.Tags />
        </Icon>
        <div>{group.category}</div>
      </Field>
      <Field>
        <Icon>
          <Icons.Tags />
        </Icon>
        <div>{group.subCategory}</div>
      </Field>
      <Field>
        <Icon>
          <Icons.User />
        </Icon>
        <div>{group.userIds}</div>
      </Field>
      <Field>
        <Icon>
          <Icons.Calendar />
        </Icon>
        <div>{group.expireAt.toISOString().split("T")[0]}</div>
      </Field>
    </Card>
  );
};

export default GroupCard;
