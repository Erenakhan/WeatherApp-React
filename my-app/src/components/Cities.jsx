
import {useState}  from 'react';
import Weather from './Weather';

const Cities = () => {
    const cities = ["Adana","Adiyaman","Afyon","Agri","Aksaray","Amasya","Ankara","Antalya","Ardahan","Artvin","Aydin","Balikesir","Bartin","Batman","Bayburt","Bilecik","Bingol","Bitlis","Bolu","Burdur","Bursa","Canakkale","Cankiri","Corum","Denizli","Diyarbakir","Duzce","Edirne","Elazig","Erzincan","Erzurum","Eskisehir","Gaziantep","Giresun","Gumushane","Hakkari","Hatay","Igdir","Isparta","Istanbul","Izmir","Kahramanmaras","Karabuk","Karaman","Kars","Kastamonu","Kayseri","Kilis","Kirikkale","Kirklareli","Kirsehir","Kocaeli","Konya","Kutahya","Malatya","Manisa","Mardin","Mersin","Mugla","Mus","Nevsehir","Nigde","Ordu","Osmaniye","Rize","Sakarya","Samsun","Sanliurfa","Siirt","Sinop","Sirnak","Sivas","Tekirdag","Tokat","Trabzon","Tunceli","Usak","Van","Yalova","Yozgat","Zonguldak"]

  const options = [
    {value: cities[0]},{value: cities[1]},{value: cities[2]},{value: cities[3]},{value: cities[4]},{value: cities[5]},{value: cities[6]},{value: cities[7]},{value: cities[8]},{value: cities[9]},{value: cities[10]},{value: cities[11]},{value: cities[12]},{value: cities[13]},{value: cities[14]},{value: cities[15]},{value: cities[16]},{value: cities[17]},{value: cities[18]},{value: cities[19]},{value: cities[20]},{value: cities[21]},{value: cities[22]},{value: cities[23]},{value: cities[24]},{value: cities[25]},{value: cities[26]},{value: cities[27]},   {value: cities[28]}, {value : cities[29]}, {value : cities[30]}, {value : cities[31]}, {value : cities[32]}, {value : cities[33]}, {value : cities[34]},{value : cities[35]}, {value : cities[36]},{value : cities[37]}, {value : cities[38]},{value : cities[39]}, {value : cities[40]},{value : cities[41]}, {value : cities[42]},{value : cities[43]}, {value : cities[44]},{value : cities[45]}, {value : cities[46]},{value : cities[47]}, {value : cities[48]},{value : cities[49]}, {value : cities[50]},{value : cities[51]}, {value : cities[52]},{value : cities[53]}, {value : cities[54]},{value : cities[55]}, {value : cities[56]},{value : cities[57]}, {value : cities[58]},{value : cities[59]},{value : cities[60]}, 
    {value : cities[61]}, {value : cities[62]}, {value : cities[63]}, {value : cities[64]}, {value : cities[65]}, {value : cities[66]}, {value : cities[67]}, {value : cities[68]}, {value : Cities[69]}, {value : cities[70]}, {value : cities[71]}, {value : cities[72]}, {value : cities[73]}, {value : cities[74]}, {value : cities[75]}, {value : cities[76]}, {value : cities[77]}, {value : cities[78]}, {value : cities[79]}, {value : cities[80]}];

  const [value, setValue] = useState("Istanbul");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <Dropdown
        options={options}
        value={value}
        onChange={handleChange}
      />

      {/* <div>Weather results of {value}!</div> */}
    </div>
  );
};


const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <div className="Dropdown-cardDiv">
    <div className="dropdown">
    <label className='label'>
      {label}
      <select value={value} onChange={onChange}>
        {options.map((option , key) => (
          <option  value={option.value} key={key}>{option.value}</option>
        ))}
      </select>
      
    </label>
    
    </div>
    <Weather handleChange={value} />
    </div>
  );
};

export default Cities;