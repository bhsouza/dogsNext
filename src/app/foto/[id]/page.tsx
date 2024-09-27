import photoGet from "@/actions/photoGet";
import NotFound from "@/app/notFound";
import PhotoContent from "@/components/photo/photoContent";

type FotoIdParams = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: FotoIdParams) {
  const { data } = await photoGet(params.id);
  if(!data) return {title: 'Fotos'};
  return {
    title: `Dogs | ${data.photo.title}`,
  }
}

export default async function FotoIdPage({ params }: FotoIdParams) {
  const { data } = await photoGet(params.id);

  if (!data) return NotFound();
  return (
    <section className="container mainContainer">
      <PhotoContent data={data} single={true} />
    </section>
  );
}
