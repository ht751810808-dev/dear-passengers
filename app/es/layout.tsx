export default function SpanishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div lang="es" className="localized-site localized-site-es">{children}</div>;
}
