import oils from "../../data/oils.json"

export default function Page({ params }) {
  const oil = oils.find((oil) => oil.url === params.slug)
  if (!oil) {
    return <div>Oil not found</div>
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center text-white" style={{ backgroundColor: oil.color_code }}>
      <h1 className="text-6xl mb-8">{oil.name}</h1>
      <h2 className="text-4xl mb-4">Ingredients:</h2>
      <ul className="list-none p-0">
        {oil.ingredients.map((ingredient, index) => (
          <li key={index} className="text-2xl mb-2">{ingredient}</li>
        ))}
      </ul>
    </div>
  )
}