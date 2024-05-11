
export default function ConsultarReporteLayout({
  children,
  report,
  payment,
}: Readonly<{
  children: React.ReactNode;
  report: React.ReactNode;
  payment: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <div className="mt-16">{report}</div>
      <div className="mt-16">{payment}</div>
    </>
  );
}

export const dynamic = 'force-dynamic'