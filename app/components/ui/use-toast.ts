import { useToast as useToastHook, toast as toastHook } from "./toast"

export const toast = toastHook

export function useToast() {
  return useToastHook()
} 