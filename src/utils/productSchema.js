import { z } from "zod";

export const productSchema = z.object({
  analysis: z.object({
    title: z.string().describe('a short title to name the product'),
    description: z.string().describe('a short 160 character decriptive paragraph describing what the product is'),
    pricePoint: z.string().describe('a starting price for this item in the format: $00.00'),
    categories: z.string().describe('0-5 unique one word categories that this product could call under, separated by commas'),
    tags: z.string().describe('0-5 unique one word tags that describe the image, separated by commas')
  })
});
