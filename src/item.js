export function drawGalleryItem(item) {
	const itemElement = document.createElement('div');
	itemElement.classList = 'gallery-item';

	const imgElement = document.createElement('img');
	imgElement.classList = 'gallery-item__image';

	const titleElement = document.createElement('span');
	titleElement.classList = 'gallery-item__title';
	titleElement.textContent = item.titleElement;

	itemElement.appendChild(imgElement);
	itemElement.appendChild(titleElement);

	return itemElement;
}
