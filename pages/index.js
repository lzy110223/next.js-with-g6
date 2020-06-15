import dynamic from "next/dynamic";
const G6component = dynamic(
  () => import('../src/components/G6component'),
  { ssr: false }
)


export default function Home() {
  return (
    <div>
      <G6component />
    </div>
  )
}
