// components/ServiceHero.tsx
type Props = {
  title: string;
  subtitle: string;
  image: string;
};

export default function ServiceHero({ title, subtitle, image }: Props) {
  return (
    <section className="relative h-[50vh] flex items-center justify-center bg-black text-white">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg">{subtitle}</p>
      </div>
    </section>
  );
}
