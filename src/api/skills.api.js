import axios from "axios";

export const getSkills = async () => {
  try {
    const { data } = await axios.get("http://localhost:1337/skills");
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
