export default function GroupClassesSection() {
  return (
    <section className="grid grid-cols-[300px_300px_300px_auto] grid-rows-2 gap-4">
      <img
        src="player1.jpeg"
        alt="player padel 1"
        className="col-start-1 row-start-1"
      />
      <img
        src="player2.jpeg"
        alt="player padel 2"
        className="col-start-2 row-start-2"
      />
      <img
        src="player3.jpeg"
        alt="player padel 3"
        className="col-start-3 row-start-1"
      />
      <div className="col-start-4 row-span-2">
        <h1>Clases Grupales</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          eveniet error nesciunt iusto excepturi sint quisquam autem adipisci
          debitis itaque qui doloremque vitae, voluptatibus cupiditate eum aut
          vero nihil soluta.
        </p>
      </div>
    </section>
  );
}
