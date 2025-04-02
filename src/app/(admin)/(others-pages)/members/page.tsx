import { Metadata } from "next";
import React from "react";
import MemberTable from "@/components/tables/MemberTable";
import { IoFilter } from "react-icons/io5";
import { LuFileSpreadsheet } from "react-icons/lu";
import { FaPlus } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Next.js Profile | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Profile page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

export default function Profile() {
  return (
    <div>
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <div className="flex">
          <div className="w-1/4">
            <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
              Members
            </h3>
          </div>
          <div className="w-3/4">
            <div className="flex items-center justify-end gap-3">
              <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800">
                <IoFilter className="h-5 w-5" />
              </button>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  className="rounded-lg border border-gray-200 pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800"
                  placeholder="Search..."
                />
              </div>
              <button className="rounded-lg border border-gray-200 px-4 py-2 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 flex justify-center items-center">
                Bulk Import Member{" "}
                <LuFileSpreadsheet className="ml-2 h-5 w-5" />
              </button>
              <button className="rounded-lg bg-custom-dark-blue px-4 py-2 text-white hover:bg-custom-dark-blue flex justify-center items-center">
                Add Member <FaPlus className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        <MemberTable />
      </div>
    </div>
  );
}
