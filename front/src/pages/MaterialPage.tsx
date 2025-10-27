const material = {
  name: 'iron',
  description:
    'Iron is a metallic element with the chemical symbol Fe (from the Latin ferrum) and atomic number 26. It is one of the most abundant elements on Earth, forming much of the planet’s core and crust. In its pure form, iron is a lustrous, silvery-gray metal known for its strength, malleability, and magnetic properties',
};

function MaterialPage() {
  return (
    <div>
      <h2>{material.name}</h2>
      <p>{material.description}</p>
    </div>
  );
}

export default MaterialPage;
