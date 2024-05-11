export const ReportCard = ({ title, report, comment }: { title: string; comment?: string; report?: string[] }) => {
  return (
    <div className="bg-bianca-300 bg-opacity-70  p-4 rounded-lg">
      <p className="text-lg text-bianca-900 font-semibold">{title}</p>
      {report &&
        report.map((item) => (
          <p key={item} className="text-bianca-800 font-bold">
            * {item}
          </p>
        ))}

      {comment && <p className="text-bianca-800 font-semibold ">{comment}</p>}
    </div>
  );
};
