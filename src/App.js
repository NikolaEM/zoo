import logo from './logo.svg';
import './App.css';

function App() {
const AnimalList = [{
  vrsta: 'zirafa',
  ime: 'Doly',
  datum_rodjenja: (new Date())
},
{
  vrsta: 'lav',
  ime: 'Pera',
  datum_rodjenja: (new Date())},
  {
    vrsta: 'nosorog',
    ime: 'Zile',
    datum_rodjenja: (new Date())},
    {
      vrsta: 'kornjaca',
      ime: 'Ana',
      datum_rodjenja: (new Date())},
      {
        vrsta: 'krokodil',
        ime: 'Rex',
        datum_rodjenja: (new Date())}
]

  return (
    <div className="App">
    <ul>
    {AnimalList.map((animal, index) => (
      <li
      key={index}>{animal.vrsta}  {animal.ime} {animal.datum_rodjenja.toLocaleDateString()}
      </li>
      ))}
      
    </ul>
    </div>
  );
}

export default App;
