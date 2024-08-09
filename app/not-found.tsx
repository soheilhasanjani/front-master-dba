import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-dvh w-dvw flex-col items-center justify-center gap-6 bg-black/5">
      <div className="relative aspect-[576/350] w-full max-w-96">
        <Image src="/images/not-found.png" fill alt="" />
      </div>
      <p>
        ممکن است صفحه ای که به دنبال آن میگردید حذف شده باشد و یا آدرس آن را به
        درستی وارد نکرده باشید
      </p>
      <Link
        className="flex h-10 items-center justify-center whitespace-nowrap rounded border border-[#0f70b7] bg-[#0f70b7] px-4 text-white transition-colors hover:bg-white hover:text-[#0f70b7] disabled:pointer-events-none disabled:border-[#5096c7] disabled:bg-[#5096c7]"
        href="/"
      >
        صفحه اصلی
      </Link>
    </div>
  );
}
