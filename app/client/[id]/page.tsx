"use client";

import SubmitBtn from "@/app/components/Buttons/SubmitBtn";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { clients } from "@/data";
import { Mail, Phone } from "lucide-react";
import { useParams } from "next/navigation";

const ClientDetails = () => {
  const { id } = useParams();

  const client = clients.find((client) => client.id === id);

  return (
    <div className="py-4 flex flex-col gap-y-4">
      <div className="w-full flex flex-col justify-between">
        <Label className="text-green-500 font-medium">Client name</Label>
        <Input
          value={client?.name}
          className="w-full rounded-sm my-1 border outline-none"
        />
      </div>

      <div className="w-full flex flex-row justify-between gap-x-4">
        <div className="flex flex-col w-full relative">
          <Label className="text-green-500 font-medium">Email</Label>
          <Input
            type="email"
            value={client?.email}
            className="w-full rounded-sm my-1 border outline-none"
            placeholder="example@mail.com"
          />
          <Mail
            size={20}
            className="text-green-500 absolute bottom-3 right-2"
          />
        </div>
      </div>

      <div className="w-full flex flex-row justify-between gap-x-4">
        <div className="flex flex-col w-full relative">
          <Label className="text-green-500 font-medium">Phone Number</Label>
          <Input
            type="tel"
            value={client?.phone}
            className="w-full rounded-sm my-1 border outline-none"
          />
          <Phone
            size={20}
            className="text-green-500 absolute bottom-3 right-2"
          />
        </div>
      </div>

      <div className="w-full flex flex-col justify-between">
        <Textarea
          className="w-full rounded-sm my-1 border outline-none h-20"
          placeholder="Notes"
          value={client?.notes}
        />
      </div>

      <SubmitBtn title="Create Client" />
    </div>
  );
};

export default ClientDetails;
