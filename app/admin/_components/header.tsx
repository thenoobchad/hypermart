

type Props = {
  onToggle: (arg: boolean) => void,
  isActive: boolean
}

export default function Header({ onToggle, isActive }: Props) {
  
  const toggle = () => {
    onToggle(!isActive )
  }
  return (
    <header className=" p-4 outline outline-zinc-100 bg-white mx-1 rounded flex flex-col gap-4">
      <div>
        <button onClick={toggle}>Click</button>
      </div></header>
  )
}
