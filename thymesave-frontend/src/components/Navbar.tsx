// your Navbar component
export default function Navbar({ isLoggedIn }: { isLoggedIn: boolean }) {
  return <nav>{isLoggedIn ? <p>Logged In Nav</p> : <p>Guest Nav</p>}</nav>;
}
