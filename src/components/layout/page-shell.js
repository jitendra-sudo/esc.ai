import Image from "next/image";

export function PageShell({ children }) {

  return (
    <div className="flex min-h-screen flex-col  text-black">
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4">
        {children}
      </main>
    </div>
  );
}

// bg-[#f2efea]