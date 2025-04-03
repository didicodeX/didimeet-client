import Button from "../shared/components/Button";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20 my-20">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <h1>
            Trouvez et participez aux meilleurs événements près de chez vous !
          </h1>
          <p>
            Découvrez des événements uniques, connectez-vous avec des passionnés
            et créez des expériences inoubliables.
          </p>
        </div>
        <Button to="/login">Get Started</Button>
        <img src="/img/Hero.png" alt="" />
      </div>
    </div>
  );
}
