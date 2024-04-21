import PaynappleLogo from "@/app/components/PaynappleLogo";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  return (
    <nav className="w-full h-12 mb-3 flex flex-row items-center justify-between fixed top-0 left-0 right-0 px-4 bg-white">
      <PaynappleLogo />

      <ConnectButton accountStatus={"avatar"} chainStatus={"none"} />
    </nav>
  );
};

export default Header;
