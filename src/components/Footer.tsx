"use client";
import { FunctionComponent } from "react";
import { DarkModeToggle } from "./DarkModeToggle";

export const Footer: FunctionComponent = () => {
  return (
    <section className="mt-8 md:mt-16 mb-12">
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          © Hydra {new Date().getFullYear()}
        </div>
        <div className="text-xs text-muted-foreground hidden lg:block"></div>
        <div>
          <DarkModeToggle />
        </div>
      </div>
    </section>
  );
};
