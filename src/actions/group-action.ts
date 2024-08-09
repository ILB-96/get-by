"use server";
import { Category, User } from "@prisma/client";
import prisma from "@/lib/prisma";

export const createGroupAction = async (
  user: User,
  name: string,
  description: string,
  country: string,
  category: Category,
  subCategory: string,
  expireAt: Date
) => {
  try {
    const group = await prisma.group.create({
      data: {
        name,
        description,
        country,
        category,
        subCategory,
        expireAt,
        users: {
          connect: [{ id: user.id }],
        },
      },
    });

    return {
      message: `${group.name} created successfully.`,
    };
  } catch (error) {
    console.error("Error creating group:", error);
    return {
      message:
        "There was an error creating your group. Please try again later.",
    };
  }
};

export const getGroupsAction = async () => {
  try {
    const groups = await prisma.group.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return groups;
  } catch (error) {
    console.error("Error fetching groups:", error);
    return [];
  }
};
