import { useLoaderData } from "remix"

export let loader = async () => {
  const result = await fetch("https://api.tfl.gov.uk/line/mode/tube/status")
  const data = await result.json()
  return data
}
export default function LiveTrainUpdates() {
  const data = useLoaderData(loader)

  return (
    <div>
      <h1>Live train update</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

//https://api.tfl.gov.uk/line/mode/tube/status
