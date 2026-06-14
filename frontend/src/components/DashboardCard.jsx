function DashboardCard({
  title,
  value,
}) {
  return (
    <div
      className="
      bg-white
      rounded-3xl
      p-6
      shadow-sm
      hover:shadow-xl
      transition-all"
    >
      <h3
        className="
        text-slate-500"
      >
        {title}
      </h3>

      <h1
        className="
        text-4xl
        font-bold
        mt-4
        bg-gradient-to-r
        from-emerald-600
        to-cyan-500
        bg-clip-text
        text-transparent"
      >
        {value}
      </h1>
    </div>
  );
}

export default DashboardCard;