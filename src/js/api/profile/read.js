import { API_PROFILES } from '../endpoints';
import { headers } from '../headers';

export async function readProfileName(name) {
  try {
    const url = `${API_PROFILES}/${name}?&_listings=true&_wins=true&_bids=true&sort=created&sortOrder=desc`;

    const response = await fetch(url, {
      method: 'GET',
      headers: headers(),
    });

    if (!response.ok) {
      alert('Could not get profile');
    } else {
      const data = await response.json();
      const profile = data.data;

      return { profile };
    }
  } catch (error) {
    alert(error, 'Error loading profile');
  }
}

export async function readProfileListings(name) {
  try {
    const url = `${API_PROFILES}/${name}/listings?&_seller=true&_bids=true&sort=created&sortOrder=desc`;

    const response = await fetch(url, {
      method: 'GET',
      headers: headers(),
    });

    if (!response.ok) {
      alert('Could not get profile');
    } else {
      const data = await response.json();
      const profile = data.data;

      return { profile };
    }
  } catch (error) {
    alert(error, 'Error loading profile');
  }
}

export async function readListingsWins(name) {
  try {
    const url = `${API_PROFILES}/${name}/wins?&_wins=true&_bids=true&sort=created&sortOrder=desc`;

    const response = await fetch(url, {
      method: 'GET',
      headers: headers(),
    });

    if (!response.ok) {
      alert('Could not get profile');
    } else {
      const data = await response.json();
      const profile = data.data;

      return { profile };
    }
  } catch (error) {
    alert(error, 'Error loading profile');
  }
}
