const getPictures = () => fetch('https://27.javascript.pages.academy/kekstagram-simple/data',
  {
    method: 'GET',
  }
).then((response) => {
  if (response.ok) {
    return response.json();
  }
  throw new Error(`${response.status} ${response.statusText}`);
});

const sendData = (formData) => fetch('https://27.javascript.pages.academy/kekstagram-simple',
  {
    method: 'POST',
    body: formData,
  },
);

export { getPictures, sendData };
