import DashboardCard from '../components/DashboardCard';
import capitalizeFirstLetter from '../utils/capitalizeFirstLetter';
import type { FurnitureType } from './HomePage';
import { Bar, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const randomColor = (opacity = 0.6) => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

function DashboardPage() {
  const furnitures: FurnitureType[] = JSON.parse(localStorage.getItem('furnitures') || '[]');

  const allMaterials = furnitures.flatMap(({ materials }) => materials.map((m) => m.name));

  const materialsStats = Object.fromEntries(
    Array.from(new Set(allMaterials)).map((material) => [
      material,
      furnitures.filter((f) => f.materials.some((m) => m.name === material)).length,
    ])
  );

  const labels = Object.keys(materialsStats).map((key) => capitalizeFirstLetter(key));
  const materialsQuantity = Object.values(materialsStats);

  // Crée un tableau de couleurs pour chaque matériau
  const backgroundColors = materialsQuantity.map(() => randomColor(0.4));
  const borderColors = backgroundColors.map((color) => color.replace(/0\.4\)$/, '1)'));

  const data = {
    labels,
    datasets: [
      {
        label: 'Nombre de meubles par matériau',
        data: materialsQuantity,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='flex flex-col items-center w-full px-5 gap-12'>
      <DashboardCard title='Quantité de meubles'>{furnitures.length}</DashboardCard>

      <DashboardCard title='Doughnut'>
        <div className='relative h-80 w-full'>
          <Doughnut data={data} options={options} />
        </div>
      </DashboardCard>

      <DashboardCard title='Bar'>
        <div className='relative h-80 w-full'>
          <Bar data={data} options={options} />
        </div>
      </DashboardCard>
    </div>
  );
}

export default DashboardPage;
