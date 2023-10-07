export function VCIconsContainer({
  children,
  padding,
}: {
  children: React.ReactNode;
  padding?: string;
}) {
  return (
    <span
      className={`${
        padding || "p-1"
      }  h-fit w-fit  block border border-white rounded-full text-[12px]`}
    >
      {children}
    </span>
  );
}
