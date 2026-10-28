// Throws on non-2xx or non-JSON responses so callers never treat an error page as data.
const fetchJson = async url => {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error(`GET ${url} failed with status ${response.status}`);
  }

  return response.json();
};

// Returns the parsed body even for non-2xx, because the API reports business errors
// (e.g. schedule already booked) as JSON with `success: false`. Throws only if no JSON body.
const postJson = async (url, data) => {
  const response = await fetch(url, {
    body: data,
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
  });

  const body = await response.json().catch(() => null);
  if (body === null) {
    throw new Error(`POST ${url} failed with status ${response.status}`);
  }

  return body;
};

export {fetchJson, postJson}
