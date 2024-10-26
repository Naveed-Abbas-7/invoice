"use client";
import { Flex } from "@/components/app/directional/Flex";
import { Text } from "@/components/app/Text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import React from "react";

export default function New() {
  return (
    <>
      <Text as="h1">Create Invoice</Text>

      <Flex justifyContent={"flex-start"} className="w-full px-9">
        <Flex
          as="form"
          flexDirection={"column"}
          gap={18}
          className="min-w-[425px]"
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            alert("done");
          }}
        >
          <Flex flexDirection={"column"} gap={6}>
            <Label className="font-bold" htmlFor="name">
              Billing Name
            </Label>
            <Input name="name" type="text" />
          </Flex>
          <Flex flexDirection={"column"}>
            <Label className="font-bold" htmlFor="email">
              Billing Email
            </Label>
            <Input name="email" type="email" />
          </Flex>
          <Flex flexDirection={"column"}>
            <Label className="font-bold" htmlFor="value">
              Value
            </Label>
            <Input name="value" type="number" />
          </Flex>

          <Flex flexDirection={"column"}>
            <Label className="font-bold" htmlFor="description">
              Description
            </Label>
            <Textarea name="description" rows={10} />
          </Flex>

          <Button type="submit">Submit</Button>
        </Flex>
      </Flex>
    </>
  );
}
