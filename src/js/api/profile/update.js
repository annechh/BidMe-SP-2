import { getLocalStorage, setLocalStorage } from '../../utilities/localStorage';
import { API_PROFILES } from '../endpoints';
import { headers } from '../headers';
import { readProfileName } from './read';

export async function updateProfile() {
  const name = getLocalStorage().name;
  let getData;

  if (getData) {
    getData = await readProfileName(name.name);
  }
  // console.log('Get Data : ', getData);

  const body = {
    banner: {
      url: document.getElementById('banner').value,
    },
    avatar: {
      url: document.getElementById('avatar').value,
    },
    bio: document.getElementById('bio').value,
  };
  // console.log('Body edit profile: ', body);

  try {
    const url = `${API_PROFILES}/${name}`;
    // console.log(url);

    const response = await fetch(url, {
      method: 'PUT',
      headers: headers(),
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      alert('Could not update profile');
    } else {
      const data = await response.json();
      // const profile = data.data;
      const userData = setLocalStorage(data.data);

      console.log('Successfully updated profile: ', data);

      return { userData };
    }
  } catch (error) {
    alert(error, 'Error loading profile');
  }
}
