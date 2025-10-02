import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import pocztowka from './assets/pocztowka.png';
import paczka from './assets/paczka.png';
import list from './assets/list.png';
export default function NadajPrzesylke(){
    const [packageType, setPackageType] = useState(1);
    const [photo, setPhoto] = useState(pocztowka);  
    const [message, setMessage] = useState("");  
    const [postalCode, setPostalCode] = useState("");
    const [displayData, setDisplayData] = useState( {
    1: 1,
    2: pocztowka,
    })
    function checkPostalCode(postalCode){
        const postalCodeRegex = /^[0-9]*$/;
        setMessage("Kod pocztowy jest poprawny");
        if(postalCode.length != 5) setMessage("Kod pocztowy musi mieć 5 znaków");
        if(!postalCodeRegex.test(postalCode)) setMessage("Nie może zawierać liter");
    }
    return(
        <div id="mainBox" className="form form-control">
            <div id="secondaryBox" className="form-group">
                <h3>Rodzaj przesyłki</h3>
                <div id="radioButtons">
                    <input type="radio" id="pocztowka" name="rodzajPrzesylki" value={2} onChange={() => {setPackageType(1), setPhoto(pocztowka) }} defaultChecked/>
                    <label htmlFor="paczka">Pocztowka</label><br/>

                    <input type="radio" id="list" name="rodzajPrzesylki" value={1} onChange={() => {setPackageType(1,5), setPhoto(list) }} />
                    <label htmlFor="list">List</label><br/>

                    <input type="radio" id="paczka" name="rodzajPrzesylki" value={3} onChange={() => {setPackageType(10), setPhoto(paczka) }} />
                    <label htmlFor="paleta">Paczka</label><br/>
                </div>
                <button className="btn btn-primary" onClick={() => setDisplayData({1: packageType, 2: photo,})}>Sprawdź cene</button>    
                <img src={displayData[2]} alt="Paczka" width="100"/>
                <label>Cena: {displayData[1]} zł</label>
            </div>
            
            <div id="ThirdBox" className="form-group">
                <h3>Dane adresowe</h3>
                <label htmlFor="street">Ulica z numerem</label><br/>
                <input type="text" id="street" name="street"  /><br/>
                
                <label htmlFor="postalCode">Kod pocztowy</label><br/>
                <input type="text" id="postalCode" name="postalCode" onChange={(e) => setPostalCode(e.target.value)} /><br/>
                
                <label htmlFor="city">Nazwa miasta</label><br/>
                <input type="text" id="city" name="city"/><br/>
                <button className="btn btn-success" onClick={() => checkPostalCode(postalCode)}>Zatwierdź</button>
                <label>{message}</label>
            </div>
        </div>
    );
}