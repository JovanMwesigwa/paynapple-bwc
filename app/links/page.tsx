import { payLinks } from "@/data";
import LinksHeader from "./links-header";
import PayLinkCard from "./pay-link-card";

const AllLinksPage = () => {
  return (
    <div className="flex flex-col gap-y-6">
      <LinksHeader />

      {payLinks.map((payLink) => (
        <PayLinkCard key={payLink.id} item={payLink} />
      ))}
    </div>
  );
};

export default AllLinksPage;
