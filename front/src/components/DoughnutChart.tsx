import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import capitalizeFirstLetter from '../utils/capitalizeFirstLetter';

// Combien de meubles ont été créé et quel pourcentage de chaque 7 matières a été utilisé

const randomColor = (opacity = 0.6) => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

type DoughnutChartProps = {
  stats: {
    [k: string]: number;
  };
};

export default function DoughnutChart({ stats }: DoughnutChartProps) {
  const labels = Object.keys(stats).map((key) => capitalizeFirstLetter(key));
  const materialsQuantity = Object.values(stats);

  // Crée un tableau de couleurs pour chaque matériau
  const backgroundColors = materialsQuantity.map(() => randomColor(0.4));
  const borderColors = backgroundColors.map((color) => color.replace(/0\.4\)$/, '1)'));

  const data = {
    labels,
    datasets: [
      {
        data: materialsQuantity,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
}
