export function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="mb-16 font-display text-[2.6rem] leading-none font-medium tracking-[-0.01em] text-heading sm:text-[3.4rem]">
      {children}
    </h2>
  )
}
