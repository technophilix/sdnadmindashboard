import axios from "axios";

async function fetchData() {
  let str_data = {};

  while (true) {
    try {
      str_data = (await axios.get("http://192.168.0.27:6969/")).data;
      if (str_data != {}) {
        break;
      } else await new Promise((r) => setTimeout(r, 2000));
    } catch (error) {
      continue;
    }
  }

  return str_data;
}

export { fetchData };
