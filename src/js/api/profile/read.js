import { API_PROFILES } from '../endpoints';
import { headers } from '../headers';

export async function readProfileName(name) {
  try {
    const url = `${API_PROFILES}/${name}?&_listings=true&_wins=true&_bids=true&sort=created&sortOrder=desc`;
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

      // console.log('Fetched Profile Data: ', data.data);

      return { profile };
    }
  } catch (error) {
    alert(error, 'Error loading profile');
  }
}

export async function readProfileListings(name) {
  try {
    const url = `${API_PROFILES}/${name}/listings?&_listings=true&_wins=true&_bids=true&sort=created&sortOrder=desc`;
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

      console.log('Read profile listings: ', data.data);

      return { profile };
    }
  } catch (error) {
    alert(error, 'Error loading profile');
  }
}

// export async function readProfiles() {
//   try {
//     const url = `${API_PROFILES}`;
//     console.log(url);

//     const response = await fetch(url, {
//       method: 'GET',
//       headers: headers(),
//     });

//     if (!response.ok) {
//       alert('Could not get profiles');
//     } else {
//       const data = await response.json();
//       const profile = data.data;

//       console.log('Fetched Profiles Data: ', data.data);

//       return { profile };
//     }
//   } catch (error) {
//     alert(error, 'Error loading profiles');
//   }
// }
