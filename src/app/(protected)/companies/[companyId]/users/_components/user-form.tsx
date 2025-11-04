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
import { UserResource } from "@/lib/api/api-client";
import { useGetRoles } from "@/hooks/use-get-roles";
import { Combobox } from "@/components/ui/combobox";
import React from "react";

const formSchema = z.object({
  username: z.string().min(1, "El nombre de usuario es requerido."),
  password: z.string().optional(),
  roles: z.array(z.string()).nonempty("Se debe seleccionar al menos un rol."),
});

type UserFormValues = z.infer<typeof formSchema>;

interface UserFormProps {
  initialData?: UserResource | null;
  onSubmit: (values: UserFormValues) => void;
  isPending: boolean;
}

export function UserForm({ initialData, onSubmit, isPending }: UserFormProps) {
  const { data: roles, isLoading: isLoadingRoles } = useGetRoles();

  const form = useForm<UserFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: initialData?.username || "",
      password: "",
      roles: initialData?.roles || [],
    },
  });

  const roleOptions = React.useMemo(() => {
    return roles
      ? roles.map((role) => ({
          value: role.name!,
          label: role.name!,
        }))
      : [];
  }, [roles]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de Usuario</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ej: usuario123"
                  {...field}
                  disabled={isPending}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {!initialData && (
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="********"
                    {...field}
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <FormField
          control={form.control}
          name="roles"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Roles</FormLabel>
              <Combobox
                options={roleOptions}
                value={field.value?.[0] || ""}
                onChange={(selectedValue) => {
                  field.onChange([selectedValue]);
                }}
                placeholder="Seleccione un rol..."
                searchPlaceholder="Buscar rol..."
                emptyText="No se encontraron roles."
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          <Button type="submit" disabled={isPending || isLoadingRoles}>
            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Guardar
          </Button>
        </div>
      </form>
    </Form>
  );
}
