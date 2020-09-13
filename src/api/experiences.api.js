import axios from "axios"

export const getExperiences = async () => {
    try {
      const { data } = await axios.get("http://localhost:1337/experiences");
      // Sort by year
      data.sort((a,b) => a.startYear - b.startYear)
      return data
    } catch (error) {
      console.log(error.message);
    }
  };