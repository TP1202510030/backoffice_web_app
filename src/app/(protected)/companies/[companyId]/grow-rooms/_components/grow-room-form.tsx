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
import { CreateGrowRoomResource, GrowRoomResource } from "@/lib/api/api-client";

const formSchema = z.object({
  name: z.string().min(1, "El nombre es requerido."),
  imageUrl: z.string().url("Debe ser una URL válida."),
});

type GrowRoomFormValues = z.infer<typeof formSchema>;

interface GrowRoomFormProps {
  initialData?: GrowRoomResource | null;
  onSubmit: (values: GrowRoomFormValues) => void;
  isPending: boolean;
}

export function GrowRoomForm({
  initialData,
  onSubmit,
  isPending,
}: GrowRoomFormProps) {
  const form = useForm<GrowRoomFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: initialData?.name || "",
      imageUrl: initialData?.imageUrl || "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de la Nave de Cultivo</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ej: Nave 1"
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
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL de la Imagen</FormLabel>
              <FormControl>
                <Input
                  placeholder="https://example.com/image.png"
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
