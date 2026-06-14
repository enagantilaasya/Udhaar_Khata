function FlipCard({
  title,
  value,
}) {
  return (
    <div
      className="
      bg-gradient-to-r
      from-green-500
      to-green-600
      text-white
      rounded-2xl
      p-6
      shadow-lg
      hover:scale-105
      duration-300"
    >
      <h3>{title}</h3>

      <h1
        className="
        text-3xl
        font-bold
        mt-2"
      >
        {value}
      </h1>
    </div>
  );
}

export default FlipCard;