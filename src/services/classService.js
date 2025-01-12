import client from "./config"

export const getClasses = async () => {
  const response = await client.get("/class")
  return response.data
}

export const addClass = async (classData) => {
  const response = await client.post("/class", classData)
  return response.data
}
