import logo from './logo.svg';
import './App.css';

function App() {
const animalList = [{
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
<table>
    {animalList.map((animal, index) => (
     <tr key={index}>
     <td>{animal.vrsta} : </td>
     <td> {animal.ime}, </td>
     <td>datum rodjenja: 
         {animal.datumRodjenja
             ? animal.datumRodjenja.toLocaleDateString()
             : "Nepoznat"}
     </td>
 </tr>
      ))}
      </table>
    </div>
  );
}

export default App;
