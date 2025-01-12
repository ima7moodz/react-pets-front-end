export const bookClass = async (classId) => {
  const response = await client.post(`/booking`, { classId })
  return response.data
}
