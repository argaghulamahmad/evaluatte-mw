const fetchJson = async url => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET',
    });

    return await response.json();
  } catch (error) {
    throw error;
  }
};

const postJson = async (url, data) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(url, {
      body: data,
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
    });

    return await response.json();
  } catch (error) {
    throw error;
  }
};

export {fetchJson, postJson}
