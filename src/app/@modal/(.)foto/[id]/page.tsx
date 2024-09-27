import photoGet from "@/actions/photoGet";
import NotFound from "@/app/notFound";
import FeedModal from "@/components/feed/feedModal";

type FotoIdParams = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: FotoIdParams) {
  const { data } = await photoGet(params.id);
  if (!data) return { title: "Fotos" };
  return {
    title: `Dogs | ${data.photo.title}`,
  };
}

export default async function FotoIdPage({ params }: FotoIdParams) {
  const { data } = await photoGet(params.id);

  if (!data) return NotFound();
  return <FeedModal photo={data} />;
}
