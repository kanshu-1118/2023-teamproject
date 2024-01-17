export default async function TrainAPI(params:any,res:any) {
  const response = await

  fetch(`http://api.ekispert.jp/v1/json/station?key=${process.env.NEXT_PUBLIC_KEY}&type=train&offset=${params.query.offset}`)
  const train = await response.json()
  res.status(200).json({train})
}