import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com/search/photos",
    headers: {
        Authorization: "Client-ID NT6Td7l5bvHUsqrHXmSWL3YdBi9MpQF4WyJXaPH9iEc",
      }
});