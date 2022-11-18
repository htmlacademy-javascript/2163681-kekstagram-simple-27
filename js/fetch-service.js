function getPictureObjects() {
  return fetch('https://27.javascript.pages.academy/kekstagram-simple/data',
    {
      method: 'GET',
    },
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    });
}

function sendData(formData) {
  return fetch('https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body: formData,
    },
  );
}

export { getPictureObjects };
export { sendData };
