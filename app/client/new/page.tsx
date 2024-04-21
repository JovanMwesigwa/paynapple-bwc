"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import SubmitBtn from "@/app/components/Buttons/SubmitBtn";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";
import ErrorComponent from "@/app/components/ErrorComponent";
import useCreate from "@/app/hooks/useCreate";
import { upsertNewClient } from "@/app/actions/clients";
import { useAccount } from "wagmi";
import { Client } from "@prisma/client";

type ClientDetailsForm = {
  name: string;
  email: string;
  phone: string;
  notes: string;
};

const ClientDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClientDetailsForm>();

  const { address } = useAccount();

  const { mutate, isSuccess, isPending } = useCreate(upsertNewClient);

  const onSubmit: SubmitHandler<ClientDetailsForm> = async (data) => {
    if (!address) return;

    const client = {
      wallet: address.toString(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      notes: data.notes,
    };

    await mutate(client as Client);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="py-4 flex flex-col gap-y-4"
    >
      <div className="w-full flex flex-col justify-between">
        <Label className="text-green-500 font-medium">Client name</Label>
        <Input
          className="w-full rounded-sm my-1 border outline-none"
          {...register("name", { required: true })}
        />
        <ErrorComponent error={errors?.name} />
      </div>

      <div className="w-full flex flex-row justify-between gap-x-4">
        <div className="flex flex-col w-full relative">
          <Label className="text-green-500 font-medium">Email</Label>
          <Input
            type="email"
            className="w-full rounded-sm my-1 border outline-none"
            placeholder="example@mail.com"
            {...register("email")}
          />
          <Mail
            size={20}
            className="text-green-500 absolute bottom-3 right-2"
          />
        </div>
        <ErrorComponent error={errors?.email} />
      </div>

      <div className="w-full flex flex-row justify-between gap-x-4">
        <div className="flex flex-col w-full relative">
          <Label className="text-green-500 font-medium">Phone Number</Label>
          <Input
            type="tel"
            className="w-full rounded-sm my-1 border outline-none"
            {...register("phone")}
          />
          <Phone
            size={20}
            className="text-green-500 absolute bottom-3 right-2"
          />
        </div>
        <ErrorComponent error={errors?.phone} />
      </div>

      <div className="w-full flex flex-col justify-between">
        <Textarea
          className="w-full rounded-sm my-1 border outline-none h-20"
          placeholder="Notes"
          {...register("notes")}
        />
        <ErrorComponent error={errors?.notes} />
      </div>

      <SubmitBtn loading={false} title="Create Client" />
    </form>
  );
};

export default ClientDetails;
