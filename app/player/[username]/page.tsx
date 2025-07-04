'use client';

import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';

export default function PlayerPage() {
  const { username } = useParams<{ username: string }>();

  const { data, isLoading } = useQuery({
    queryKey: ['player', username],
    queryFn: async () => {
      const res = await axios.get(
        `https://api.chess.com/pub/player/${username}`
      );
      return res.data;
    },
  });

  if (isLoading) return <p>Loading profile...</p>;
  if (!data) return <p>No data</p>;

  const { avatar, name, country, last_online } = data;

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">{name || username}</h1>
      {avatar && (
        <Image
          src={avatar}
          alt={username}
          width={100}
          height={100}
          className="rounded-full"
        />
      )}
      <p>Country: {country}</p>
      <p>Last online: {last_online}</p>
    </div>
  );
}
