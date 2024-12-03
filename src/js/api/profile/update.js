import { getLocalStorage } from '../../utilities/localStorage';
import { API_PROFILES } from '../endpoints';
import { headers } from '../headers';
import { readProfileName } from './read';

export async function updateProfile() {
  const name = getLocalStorage().name;
  let getData;

  if (getData) {
    getData = await readProfileName(name.name);
  }

  const body = {
    banner: {
      url: document.getElementById('banner').value,
    },
    avatar: {
      url: document.getElementById('avatar').value,
    },
    bio: document.getElementById('bio').value,
  };

  try {
    const url = `${API_PROFILES}/${name}`;
    const response = await fetch(url, {
      method: 'PUT',
      headers: headers(),
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      alert('Could not update profile');
    } else {
      const data = await response.json();
      location.reload(true);

      console.log('Successfully updated profile: ', data);

      const currentStoredData = getLocalStorage();
      const updatedData = {
        ...currentStoredData,
        banner: document.getElementById('banner').value,
        avatar: document.getElementById('avatar').value,
        bio: document.getElementById('bio').value,
      };
      localStorage.setItem('userData', JSON.stringify(updatedData));

      console.log('updated storage: ', updatedData);

      return { data };
    }
  } catch (error) {
    alert(error, 'Error loading profile');
  }
}
