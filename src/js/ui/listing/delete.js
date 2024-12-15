import { deleteListing } from '../../api/listing/delete';

export async function onDeleteListing(id) {
  setTimeout(async () => {
    const confirmDelete = confirm(
      'Are you sure you want to delete this listing?'
    );

    if (confirmDelete) {
      await deleteListing(id);
    }
  }, 100);
}
