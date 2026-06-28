export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

        <h1 className="text-3xl font-bold text-white">
          YourLogo
        </h1>

        <ul className="hidden gap-10 text-white md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>

        <button className="rounded-lg bg-[#C9A227] px-6 py-3 font-medium text-white transition hover:scale-105">
          Book Consultation
        </button>

      </div>
    </nav>
  );
}