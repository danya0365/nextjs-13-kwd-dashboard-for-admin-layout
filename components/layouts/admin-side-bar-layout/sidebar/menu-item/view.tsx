"use client";

import { classNames } from "@/helpers";
import useViewModel from "./view-model";
import Link from "next/link";
import { HTMLAttributes, PropsWithChildren, ReactNode } from "react";

type MenuItemProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>> & {
  title: string;
  icon: ReactNode;
};

const MenuItemView = (props: MenuItemProps) => {
  const { children, title, icon } = props;
  const { isActive, isSubMenuOpen, setIsSubMenuOpen } = useViewModel();
  return (
    <div>
      <a
        href="#"
        className={classNames(
          "dark:text-light flex items-center rounded-md p-2 text-gray-500 transition-colors hover:bg-indigo-100 dark:hover:bg-indigo-600",
          (isSubMenuOpen || isActive) && "bg-indigo-100 dark:bg-indigo-600"
        )}
        role="button"
        aria-haspopup="true"
        aria-expanded={isSubMenuOpen || isActive ? "true" : "false"}
        onClick={(e) => {
          e.preventDefault();
          setIsSubMenuOpen((prevValue) => !prevValue);
        }}
      >
        <span aria-hidden="true">{icon}</span>
        <span className="ml-2 text-sm"> {title} </span>
        <span className="ml-auto" aria-hidden="true">
          <svg
            className={classNames(
              "h-4 w-4 transform transition-transform",
              isSubMenuOpen && "rotate-180"
            )}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </a>
      {isSubMenuOpen && (
        <div role="menu" className="mt-2 space-y-2 px-7" aria-label={title}>
          {children}
        </div>
      )}
    </div>
  );
};

type SubMenuItemProps = PropsWithChildren<
  HTMLAttributes<HTMLAnchorElement>
> & {};

const SubMenuItemView = (props: SubMenuItemProps) => {
  const { children, ...restProps } = props;
  return (
    <Link
      href="#"
      role="menuitem"
      className="dark:hover:text-light block rounded-md p-2 text-sm text-gray-400 transition-colors duration-200 hover:text-gray-700 dark:text-gray-400"
      {...restProps}
    >
      {children}
    </Link>
  );
};

export const MenuItem = {
  MenuItemView,
  SubMenuItemView,
};
