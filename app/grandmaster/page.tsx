'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';

type TitledPlayersResponse = {
  players: string[];
};

export default function GrandmastersPage() {
  const { data, isLoading } = useQuery({
    queryKey: ['grandmasters'],
    queryFn: async () => {
      const res = await axios.get<TitledPlayersResponse>(
        'https://api.chess.com/pub/titled/GM'
      );
      return res.data;
    },
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Chess Grandmasters</h1>
      <ul className="space-y-2">
        {data?.players.map((username) => (
          <li key={username}>
            <Link
              href={`/player/${username}`}
              className="text-blue-600 hover:underline"
            >
              {username}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
