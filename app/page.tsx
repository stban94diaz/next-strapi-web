import { Pagination } from "./components/Pagination";
import { getCoverImage, getGames } from "./services/video-games";
import mdToHtml from "./snarkdown";

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function Home({ searchParams }: Props) {
  const { page } = searchParams || {};
  const res = await getGames(page ? +page : 1)

  return (
    <main className="flex flex-col items-center min-h-screen p-24">
      {
        res.data.map(game => (
          <a key={game.id} href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={getCoverImage(game.cover)} alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {game.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: mdToHtml(game.description) }} />
            </div>
          </a>
        ))
      }
      <Pagination pagination={res.meta.pagination} />
    </main>
  );
}
