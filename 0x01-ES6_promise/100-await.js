import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  /* eslint-disable */
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return { photo, user };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}