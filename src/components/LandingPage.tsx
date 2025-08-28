
type LandingPageProps = {
  title?: string;
};
const LandingPage = ({ title = "Landing Page" }: LandingPageProps) => {
  const handleSubscribe = () => {
    alert("Subscribed!");
  };

  return (
    <div>
      <h2>Welcome to My {title}</h2>
      <ul>
        <li>🚀 Fast development with Vite</li>
        <li>✅ Tested with Jest & RTL</li>
        <li>🎨 Styled with Simplicity</li>
      </ul>
      <button onClick={handleSubscribe}>Subscribe Now</button>
    </div>
  );
};

export default LandingPage;
