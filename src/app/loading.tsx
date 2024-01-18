import Loader from "@/components/custom/loader";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <section className="h-[calc(100vh_-_70px)] flex justify-center items-center">
      <Loader />
    </section>
  );
}
