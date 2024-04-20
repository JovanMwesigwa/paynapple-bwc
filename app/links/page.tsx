import { appUrl } from "@/data";
import ParentFloatingButton from "../components/ParentFloatingButton";
import LinksHeader from "./links-header";
import { Separator } from "@/components/ui/separator";
import PayLinkCard from "./pay-link-card";

const AllLinksPage = () => {
  return (
    <div className="flex flex-col gap-y-6">
      <LinksHeader />

      <PayLinkCard />
      <PayLinkCard />
      <PayLinkCard />
      <PayLinkCard />
      <PayLinkCard />
    </div>
  );
};

export default AllLinksPage;
