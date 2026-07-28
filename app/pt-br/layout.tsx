export default function PortugueseLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div lang="pt-BR" className="localized-site localized-site-pt-br">{children}</div>;
}
