import { API_PROFILES } from '../endpoints';
import { headers } from '../headers';

export async function readProfileName(name) {
  try {
    const url = `${API_PROFILES}/${name}?&_listings='true'&_wins='true'`;
    console.log(url);

    const response = await fetch(url, {
      method: 'GET',
      headers: headers(),
    });

    if (!response.ok) {
      alert('Could not get profile');
    } else {
      const data = await response.json();
      const profile = data.data;

      console.log('Fetched Profile Data: ', data.data);

      return { profile };
    }
  } catch (error) {
    alert(error, 'Error loading profile');
  }
}
