export default function Page({ params }: { params: { id: string } }) {
  return <div>Issue number: {params.id}</div>
}
