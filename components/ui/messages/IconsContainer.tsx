export function IconsContainer({
  children,
  style,
}: {
  children: React.ReactNode;

  style?: string;
}) {
  return <span className={`  h-fit w-fit  block  ${style}`}>{children}</span>;
}
