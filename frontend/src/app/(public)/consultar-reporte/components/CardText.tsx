export const CardText = ({ title, value, textColor }: { title: string; value: string | number, textColor: string }) => {
  return (
    <div className={`md:flex md:gap-2 text-[1.5rem] md:text-start ${textColor}`}>
      <strong>{title}:</strong>
      <p>{value}</p>
    </div>
  );
};
