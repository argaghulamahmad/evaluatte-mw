const fetchJson = async (url, headers) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(url, {
      headers: headers,
      method: 'GET',
    });

    return await response.json();
  } catch (error) {
    throw error;
  }
};

const postJson = async (url, data, headers) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(url, {
      body: data,
      headers: headers,
      method: 'POST',
    });

    return await response.json();
  } catch (error) {
    throw error;
  }
};

export {fetchJson, postJson}
