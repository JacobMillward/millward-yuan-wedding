import React from "react";

export const AgendaSection = () => {
  return (
    <div className="flex flex-col items-center text-slate-900 p-20">
      <h1 className="text-4xl font-bold">Agenda</h1>
      <p className="mt-5">
        We&apos;re currently still finalising the agenda for the day, but
        here&apos;s a rough idea of what to expect:
      </p>
      <ul className="mt-5 text-center sm:text-3xl">
        <li className="mb-2 sm:mb-4">
          <span className="font-bold">12:30pm</span> - Ceremony
        </li>
        <li className="mb-2  sm:mb-4">
          <span className="font-bold">TBD</span> - Reception Drinks and Canapés
        </li>
        <li className="mb-2  sm:mb-4">
          <span className="font-bold">TBD</span> - Wedding Breakfast
        </li>
        <li className="mb-2  sm:mb-4">
          <span className="font-bold">TBD</span> - Speeches
        </li>
        <li className="mb-2  sm:mb-4">
          <span className="font-bold">TBD</span> - Small break
        </li>
        <li className="mb-2  sm:mb-4">
          <span className="font-bold">TBD</span> - Evening reception start
        </li>
        <li className="mb-2  sm:mb-4">
          <span className="font-bold">TBD</span> - Cake Cutting
        </li>
        <li className="mb-2  sm:mb-4">
          <span className="font-bold">TBD</span> - First Dance
        </li>
        <li className="mb-2  sm:mb-4">
          <span className="font-bold">TBD</span> - Evening Food
        </li>
        <li>Evening ends late!</li>
      </ul>
    </div>
  );
};
