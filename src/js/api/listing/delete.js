import { API_LISTINGS } from '../endpoints';
import { headers } from '../headers';

export async function deleteListing(id) {
  try {
    const response = await fetch(`${API_LISTINGS}/${id}`, {
      method: 'DELETE',
      headers: headers(),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      console.error('Failed to delete post:', errorMessage);
      return false;
    } else {
      alert('Post successfully deleted! Redirecting you to home page');
      window.location.reload();
    }
  } catch (error) {
    console.error('Error deleting post:', error);
    return false;
  }
}
