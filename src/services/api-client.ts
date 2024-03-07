import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "beab11ae00364a35a1869e5193c5c9aa",
  },
});
