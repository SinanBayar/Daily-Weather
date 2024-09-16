import dailyweatherLogo from "./images/dailyweather-logo.png";

export default function Home() {
  return (
    <div>
      <h1>Dailyweather</h1>
      <img src={dailyweatherLogo.src} alt="logo" width={400} />
    </div>
  );
}
