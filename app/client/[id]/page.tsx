"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import SubmitBtn from "@/app/components/Buttons/SubmitBtn";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { clients } from "@/data";
import { Mail, Phone } from "lucide-react";
import { useParams } from "next/navigation";
import useFetchOne from "@/app/hooks/useFetch";
import { upsertGetClientById, upsertUpdateClient } from "@/app/actions/clients";
import useUpdate from "@/app/hooks/useUpdate";
import { Client } from "@prisma/client";

type Inputs = {
  name: string;
  email: string;
  phone: string;
  notes: string;
};

const ClientDetails = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useFetchOne(
    upsertGetClientById,
    Number(id),
    "getClientById"
  );

  const { mutate, isPending, isError, isSuccess } = useUpdate(
    upsertUpdateClient,
    Number(id)
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    const client = {
      name: formData.name,
      email: formData.email,
      notes: formData.notes,
      phone: formData.phone,
      wallet: data.wallet,
    };

    await mutate(client as Client);
  };

  if (!data) return null;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="py-4 flex flex-col gap-y-4"
    >
      <div className="w-full flex flex-col justify-between">
        <Label className="text-green-500 font-medium">Client name</Label>
        <Input
          defaultValue={data.name}
          className="w-full rounded-sm my-1 border outline-none"
          {...register("name", { required: true })}
        />
      </div>

      <div className="w-full flex flex-row justify-between gap-x-4">
        <div className="flex flex-col w-full relative">
          <Label className="text-green-500 font-medium">Email</Label>
          <Input
            type="email"
            value={data.email}
            className="w-full rounded-sm my-1 border outline-none"
            placeholder="example@mail.com"
            {...register("email", { required: true })}
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
            value={data.phone}
            className="w-full rounded-sm my-1 border outline-none"
            {...register("phone", { required: true })}
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
          value={data.notes}
          {...register("notes")}
        />
      </div>

      <SubmitBtn loading={isPending || isLoading} title="Create Client" />
    </form>
  );
};

export default ClientDetails;
