import { useEffect, useState } from "react"

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  function changeMenuOpen() {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    setMenuOpen(false)
  }, [])

  return (
    <div className="menu sm:hidden">
      <button className="h-10 w-10" onClick={changeMenuOpen}>
        <MenuIcon />
      </button>

      {menuOpen && <MenuList />}
    </div>
  )
}

function MenuList() {
  return (
    <ul className="menu-list w-screen bg-white absolute left-0 pb-3 pt-1 text-center">
      <li className="menu-item py-2">
        <a
          href="/"
          className="cursor-pointer hover:text-opacity-80 transition-all text-black text-lg"
        >Inicio</a>
      </li>
      <li className="menu-item py-2">
        <a
          href="/nosotros"
          className="cursor-pointer hover:text-opacity-80 transition-all text-black text-lg"
        >Nosotros</a>
      </li>
      <li className="menu-item py-2">
        <a
          href="#"
          className="cursor-pointer hover:bg-green-400 hover:text-black bg-transparent transition-color border-solid border-green-400 text-lg border py-1 px-2 text-green-400 rounded-lg"
        >Comienza a viajar</a>
      </li>
    </ul>
  )
}

function MenuIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  )
}