import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function absoluteUrl(path = "") {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  return `${baseUrl}${path}`;
}

export function isConfirmedContact(value: string) {
  return Boolean(value && !value.toLowerCase().includes("confirmer"));
}
