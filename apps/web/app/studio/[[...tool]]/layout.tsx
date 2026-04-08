export const metadata = {
  title: "weSafe Blog Studio",
  description: "Content management for weSafe Future Foundation blog",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ height: "100vh" }}>
      {children}
    </div>
  );
}
