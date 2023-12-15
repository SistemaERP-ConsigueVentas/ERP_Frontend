import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ProformaScheme } from "@/lib/validators/proforma";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Separator } from "@/components/ui/separator";
import { ProformaFormPersonnel } from "./ProformaFormPersonnel";
import { ProformaFormObservation } from "./ProformaFormObservations";
import { ProformaFormPackages } from "./ProformaFormPackages";

interface Props {
  onSubmit: (values: z.infer<typeof ProformaScheme>) => void;
}

export function ProformaForm({ onSubmit }: Props) {
  const form = useForm<z.infer<typeof ProformaScheme>>({
    resolver: zodResolver(ProformaScheme),
    defaultValues: {
      fecha: "",
      reference: "",
      elaborado_por: "",
      aprobado_por: "",
      correo: "",
      telefono: "",
    },
  });

  return (
    <Form {...form}>
      <form id="add-proforma-form" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="w-full">
          <div className="flex w-[35%] absolute right-[5rem] top-[1rem]">
            <div className="p-2 w-[50%] mb-8">
              <FormField
                control={form.control}
                name="fecha"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="text" placeholder="N 15" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="p-2 w-[50%] mb-8">
              <FormField
                control={form.control}
                name="fecha"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="text" placeholder="Fecha: Hoy" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="p-4 w-full lg:w-[50%] mb-4">
            <FormField
              control={form.control}
              name="fecha"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Referencia</FormLabel>
                  <FormControl>
                    <Input type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 mb-4">
            <div className="p-4">
              <FormField
                control={form.control}
                name="reference"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Elaborado por</FormLabel>
                    <FormControl>
                      <Input type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="p-4">
              <FormField
                control={form.control}
                name="fecha"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Aprobado por</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="1234" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="p-4">
              <FormField
                control={form.control}
                name="fecha"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Empresa</FormLabel>
                    <FormControl>
                      <Input type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="p-4">
              <FormField
                control={form.control}
                name="fecha"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Requerido por</FormLabel>
                    <FormControl>
                      <Input type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Separator className="my-8" />
          <div className="grid grid-cols-2 lg:grid-cols-3 w-full lg:w-[75%] relative">
            <div className="p-4">
              <FormField
                control={form.control}
                name="fecha"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Empresa</FormLabel>
                    <FormControl>
                      <Input type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="p-4">
              <FormField
                control={form.control}
                name="fecha"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Requerido por</FormLabel>
                    <FormControl>
                      <Input type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="p-4">
              <FormField
                control={form.control}
                name="fecha"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipo de proforma</FormLabel>
                    <FormControl>
                      <Input type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <ProformaFormPackages form={form} />
          <ProformaFormPersonnel form={form} />
          <ProformaFormObservation form={form} />
        </div>
      </form>
    </Form>
  );
}
