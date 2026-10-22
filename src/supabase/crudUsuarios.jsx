import { supabase } from "../index";

export const InsertarUsuarios = async (p) => {
  const { data, error } = await supabase.from("usuarios").insert(p).select();
  if (error) {
    console.error("Error al insertar usuario:", error);
    return null;
  }
  return data;
};
