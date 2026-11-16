/** Decorative page background: dotted grid + slowly drifting brand-coloured glows. Purely visual. */
export function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-dots" />
      <div className="animate-blob absolute -top-32 left-[-10%] h-[22rem] w-[22rem] rounded-full bg-primary/20 blur-3xl sm:h-[30rem] sm:w-[30rem] dark:bg-primary/25" />
      <div
        className="animate-blob absolute top-[30%] right-[-15%] h-[20rem] w-[20rem] rounded-full bg-accent/15 blur-3xl sm:h-[28rem] sm:w-[28rem]"
        style={{ animationDelay: '-6s' }}
      />
      <div
        className="animate-blob absolute bottom-[-10%] left-[20%] h-[18rem] w-[18rem] rounded-full bg-pink-500/10 blur-3xl sm:h-[24rem] sm:w-[24rem]"
        style={{ animationDelay: '-12s' }}
      />
    </div>
  );
}
