"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { CompanyResource } from "@/lib/api/api-client";

const formSchema = z.object({
  companyName: z.string().min(1, "El nombre es requerido."),
  taxIdentificationNumber: z
    .string()
    .length(11, "El RUC debe tener 11 dígitos.")
    .regex(/^\d+$/, "El RUC solo debe contener números."),
});

type CompanyFormValues = z.infer<typeof formSchema>;

interface CompanyFormProps {
  initialData?: CompanyResource | null;
  onSubmit: (values: CompanyFormValues) => void;
  isPending: boolean;
}

export function CompanyForm({
  initialData,
  onSubmit,
  isPending,
}: CompanyFormProps) {
  const form = useForm<CompanyFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: initialData?.companyName || "",
      taxIdentificationNumber:
        initialData?.taxIdentificationNumber?.toString() || "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de la Empresa</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ej: Mushroom Experts S.A."
                  {...field}
                  disabled={isPending}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="taxIdentificationNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>RUC</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ej: 20123456789"
                  {...field}
                  disabled={isPending}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button type="submit" disabled={isPending}>
            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Guardar
          </Button>
        </div>
      </form>
    </Form>
  );
}
