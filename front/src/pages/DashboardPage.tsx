import DashboardCard from '../components/DashboardCard';
import DoughnutChart from '../components/DoughnutChart';
import type { FurnitureType } from './HomePage';

function DashboardPage() {
  const furnitures: FurnitureType[] = JSON.parse(localStorage.getItem('furnitures') || '[]');

  const allMaterials = Object.values(furnitures).flatMap((furniture) =>
    furniture.materials.map((material) => material.name)
  );

  const materialsStats = Object.fromEntries(
    Array.from(new Set(allMaterials)).map((material) => [
      material,
      furnitures.filter((f) => f.materials.some((m) => m.name === material)).length,
    ])
  );

  return (
    <>
      <DashboardCard title='Quantité de meubles'>{furnitures.length}</DashboardCard>
      <h2 className='text-2xl font-semibold mb-4'></h2>
      <DoughnutChart stats={materialsStats} />
    </>
  );
}

export default DashboardPage;
