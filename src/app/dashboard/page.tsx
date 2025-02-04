import { Flex } from "@/components/app/directional/Flex";
import { Text } from "@/components/app/Text";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { faker } from "@faker-js/faker";
import { Metadata } from "next/types";
import { PlusCircle } from "lucide-react";

import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Dashboard() {
  return (
    <>
      <Text as="h1">Dashboard</Text>
      <Flex flexDirection={"column"} className="w-full">
        <Flex
          flexDirection={"row"}
          justifyContent={"flex-end"}
          alignItems={"center"}
        >
          <Button asChild variant={"ghost"}>
            <Link href={"/dashboard/invoices/new"}>
              <PlusCircle /> Create New Invoice
            </Link>
          </Button>
        </Flex>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Date</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                {new Date().toDateString()}
              </TableCell>
              <TableCell>{faker.person.fullName()}</TableCell>
              <TableCell>{faker.internet.email()}</TableCell>
              <TableCell>paid</TableCell>
              <TableCell>
                {(faker.number.float() * Math.random() * 100).toFixed(2)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Flex>
    </>
  );
}
