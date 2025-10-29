type DashboardCardProps = {
  title: string;
  children: React.ReactNode;
};

export default function DashboardCard({ title, children }: DashboardCardProps) {
  return (
    <div className='relative w-full  bg-white rounded-4xl p-6 shadow-md '>
      <div className='absolute left-0 top-0' />

      <h2 className='text-lg sm:text-xl font-semibold mb-3 tracking-wide'>{title}</h2>

      <div>{children}</div>
    </div>
  );
}
