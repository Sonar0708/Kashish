import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="page-wash grid min-h-[80vh] place-items-center px-5 pt-32 pb-20 text-center">
      <div>
        <p className="font-hand text-3xl text-coral-deep">this position has been filled…</p>
        <h1 className="display mt-4 text-[7rem] text-plum sm:text-[10rem]">404</h1>
        <p className="mx-auto mt-2 max-w-md text-lg text-mute">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">Back to home</Button>
          <Button href="/contact" variant="secondary">
            Contact Kashish
          </Button>
        </div>
      </div>
    </section>
  );
}
