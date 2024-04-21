"use client";

import { PayLink } from "@prisma/client";
import { upsertGetAllPayLinks } from "../actions/paylinks";
import useFetchAll from "../hooks/useFetchAll";
import LinksHeader from "./links-header";
import PayLinkCard from "./pay-link-card";

const AllLinksPage = () => {
  const { data, isLoading, error } = useFetchAll(
    upsertGetAllPayLinks,
    "getAllPayLinks"
  );

  if (!data) return null;

  return (
    <div className="flex flex-col gap-y-6">
      <LinksHeader />

      {data.map((payLink: PayLink) => (
        <PayLinkCard key={payLink.id} item={payLink} />
      ))}
    </div>
  );
};

export default AllLinksPage;
