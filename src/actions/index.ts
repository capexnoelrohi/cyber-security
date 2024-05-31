"use server";

import { redirect } from "next/navigation";

export async function login(url: string, formData: FormData) {
  "use server";
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  redirect(`${url}&username=${email}&password=${password}`);
}
