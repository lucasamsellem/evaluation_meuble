type DashboardCardProps = {
  title: string;
  children: React.ReactNode;
};

export default function DashboardCard({ title, children }: DashboardCardProps) {
  return (
    <div className='relative bg-linear-to-br from-blue-500 via-blue-600 to-blue-700 text-white rounded-2xl p-6 shadow-md sm:w-fit'>
      <div className='absolute left-0 top-0 h-full w-1.5 bg-white/30 ' />

      <h2 className='text-lg sm:text-xl font-semibold mb-3 tracking-wide'>{title}</h2>

      <div className='text-sm sm:text-base text-white/90'>{children}</div>
    </div>
  );
}
