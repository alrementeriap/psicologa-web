export default function SectionDivider() {
    return (
      <div className="relative w-full overflow-hidden">
        <div
          className="w-full h-[260px] md:h-[300px]"
          style={{
            backgroundImage: "url('/images/divider.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 55%",
            backgroundRepeat: "no-repeat"
          }}
        />
      </div>
    )
  }