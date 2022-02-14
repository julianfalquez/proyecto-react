const get = async (url) => {
    try {
      const response = await fetch(url);
      return response.json();
    } catch (err) {
      return null;
    }
  };

  export {get};
