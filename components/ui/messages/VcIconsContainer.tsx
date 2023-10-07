export function VCIconsContainer({
  children,
  padding,
  bgColor,
  border,
}: {
  children: React.ReactNode;
  padding?: string;
  bgColor?: string;
  border?: string;
}) {
  return (
    <span
      className={`${padding || "p-1"}  h-fit w-fit  block ${
        border || "border"
      } rounded-full text-[12px] bg-${bgColor}`}
    >
      {children}
    </span>
  );
}
