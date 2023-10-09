export function validateURL(newURL) {
	try {
		new URL(newURL);
		return true;
	} catch (err) {
		return false;
	}
}
