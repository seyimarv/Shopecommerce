import { Cloudinary } from "@cloudinary/url-gen";

const cld = new Cloudinary({
  cloud: {
    cloudName: "YOUR_CLOUD_NAME",
  },
});

const getResizedImageUrl = (publicId, width, height) => {
  return cld.image(publicId).resize(`w_${width},h_${height},c_fill`).toURL();
};

export default getResizedImageUrl;
