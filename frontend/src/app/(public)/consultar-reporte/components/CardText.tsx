export const CardText = ({ title, value }: { title: string; value: string | number }) => {
  return (
    <div className="md:flex md:gap-2 text-[1.5rem]">
      <strong>{title}:</strong>
      <p className="text-nowrap">{value}</p>
    </div>
  );
};
