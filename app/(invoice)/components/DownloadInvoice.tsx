import { PDFDownloadLink } from "@react-pdf/renderer";
import { Download, Loader } from "lucide-react";
import PreviewInvoicepdf from "./PreviewInvoicepdf";

const DownloadInvoice = () => {
  return (
    <PDFDownloadLink document={<PreviewInvoicepdf />} fileName="invoice.pdf">
      <div className="rounded-full flex items-center justify-center bg-blue-400 size-12 text-white mr-4 ">
        {/* @ts-ignore */}
        {({ blob, url, loading, error }) =>
          loading ? <Loader size={20} /> : <Download size={20} />
        }
        {/* <Download size={20} /> */}
      </div>
    </PDFDownloadLink>
  );
};

export default DownloadInvoice;
