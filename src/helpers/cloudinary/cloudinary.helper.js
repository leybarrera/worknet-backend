import { v2 as cloudinary } from 'cloudinary'

const uploadImage = async (folder, file) => {
  const { secure_url } = await cloudinary.uploader.upload(file, {
    folder: `worknet/users/${folder}`,
  })

  return secure_url
}

const uploadCV = async (file) => {
  const { secure_url } = await cloudinary.uploader.upload(file, {
    folder: `worknet/cvs/${folder}`,
    resource_type: 'raw',
  })

  return secure_url
}

export default { uploadImage, uploadCV }
