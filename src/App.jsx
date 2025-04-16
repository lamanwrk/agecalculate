import "./App.css";

function App() {
  function calculateAge() {
    const bugun = new Date();
    const birthDate = document.getElementById("birthDate");

    if (!birthDate) return;

    const daxilEdilenTarix = new Date(birthDate.value);
    const ferqMilisaniye = bugun - daxilEdilenTarix;
    const ferqGun = Math.floor(ferqMilisaniye / (1000 * 60 * 60 * 24));
    const ferqIl = Math.floor(ferqGun / 365.25);
    document.getElementById("result").textContent = `Your Age: ${ferqIl}`;
    document.getElementById("birthDate").value = ""; 

  }

  return (
    <div className="box_wrp">
      <div className="mini_box">
        <div>
          Birth Date <input type="date" id="birthDate" />
        </div>
        <p onClick={calculateAge}>Calculate your age</p>
        <p id="result"> </p>
      </div>
    </div>
  );
}

export default App;
