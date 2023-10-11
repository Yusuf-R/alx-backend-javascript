// Handle multiple promises
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, filename) {
  try {
    const photoPromise = await uploadPhoto(filename);
    const userPromise = await signUpUser(firstName, lastName);

    const [photo, user] = await Promise.all([photoPromise, userPromise]);
    return [
      {
        status: 'success',
        value: user,
      },
      {
        status: 'success',
        value: photo,
      },
    ];
  } catch (err) {
    return [
      {
        status: 'error',
        value: err,
      },
    ];
  }
}

export default handleProfileSignup;
