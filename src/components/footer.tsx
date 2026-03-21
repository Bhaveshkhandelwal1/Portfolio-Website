import React from "react";
import { navigation } from "@/lib/navlinks";

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      <div className="container mx-auto max-w-3xl px-4 py-4">
        <div className="md:flex md:items-center md:justify-between">
          {/* Social links */}
          <div className="flex justify-center space-x-6 md:order-2">
            {navigation.map((item, index) => (
              <a
                key={index}
                href={item.url || `http://${item.name.toLowerCase()}.com/${item.username}`}
                target="_blank"
                rel="noopener noreferrer"
                title={item.name}
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-muted-foreground">
              Built in &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
