import Link from "next/link";

function HomePage() {

    const events = {}
  return (
    <div>
        <h1>this is the starting page</h1>
        <Link href="/events">go to events</Link>
    </div>
  )
}

export default HomePage