import Link from "next/link";

export default function SwitcherLink({
  to,
  name,
}: {
  to: string;
  name: string;
}) {
  return (
    <nav className="self-center">
      <Link href={`/${to}`}>{name}</Link>
      <span></span>
    </nav>
  );
}
