export default async function fetchJson(url,
                                        method = 'GET',
                                        data,
) {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(url, {
      method,
      data
    });

    return await response.json();
  } catch (error) {
    throw error;
  }
}
