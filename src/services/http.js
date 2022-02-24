const get = async (url) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    }else{
      throw response.status
    }
  } catch (err) {
    throw err
  }
};

export { get };
