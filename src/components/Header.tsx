"use client";
import { FunctionComponent } from "react";
import { DarkModeToggle } from "./DarkModeToggle";

export const Header: FunctionComponent = () => {
  return (
    <section className="flex w-full items-center justify-start mt-8 md:mt-16 mb-12">
      <div className="text-4xl">SocialApp</div>
      <DarkModeToggle />
    </section>
  );
};
