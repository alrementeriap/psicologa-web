export default function ArtDivider() {
    return (
      <section className="relative overflow-hidden px-6 py-10 md:px-12 lg:px-24">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-[56px]">
            <div
              className="h-[210px] w-full md:h-[250px] lg:h-[270px]"
              style={{
                backgroundImage: "url('/images/divider.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            />
  
            {/* Fades más suaves y ovalados */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#f5f2ec] via-[#f5f2ec]/70 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f5f2ec] via-[#f5f2ec]/70 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f5f2ec] via-[#f5f2ec]/70 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f5f2ec] via-[#f5f2ec]/70 to-transparent" />
  
            {/* Ovalado extra en esquinas */}
            <div className="pointer-events-none absolute -left-8 -top-8 h-32 w-32 rounded-full bg-[#f5f2ec]/70 blur-3xl" />
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#f5f2ec]/70 blur-3xl" />
            <div className="pointer-events-none absolute -left-8 -bottom-8 h-32 w-32 rounded-full bg-[#f5f2ec]/70 blur-3xl" />
            <div className="pointer-events-none absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-[#f5f2ec]/70 blur-3xl" />
          </div>
        </div>
      </section>
    );
  }