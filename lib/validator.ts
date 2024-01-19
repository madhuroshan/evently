import { z } from "zod";

export const eventFormSchema = z.object({
  title: z.string().min(3, "Title must be atleast 3 chars"),
  description: z
    .string()
    .min(10, "Description must be atleast 10 chars")
    .max(400, "Description must be less than 400 chars"),
  location: z
    .string()
    .min(3, "Location must be atleast 3 chars")
    .max(100, "Location must be less than 100 chars"),
  imageUrl: z.string(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string(),
});
