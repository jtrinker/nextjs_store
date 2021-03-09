import { list } from "@keystone-next/keystone/schema";
import { relationship, text } from "@keystone-next/fields";
import { cloudinaryImage } from "@keystone-next/cloudinary";
import 'dotenv/config';

// cloudinary config
export const cloudinary = {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_KEY,
    apiSecret: process.env.CLOUDINARY_SECRET,
    folder: 'advreact'
}

export const ProductImage = list({
    fields: {
        image: cloudinaryImage({
            cloudinary,
            label: 'Source'
        }),
        altText: text()
    }
});