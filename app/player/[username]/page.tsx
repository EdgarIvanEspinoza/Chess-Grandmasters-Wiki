'use client';

import { useParams, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import TimeSinceLastOnline from '@/components/TimeSinceLastOnline';
import { BadgeCheckIcon } from 'lucide-react';

export default function PlayerPage() {
  const router = useRouter();
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

  const {
    avatar,
    name,
    country,
    last_online,
    title,
    status,
    is_streamer,
    league,
    verified,
    followers,
    streaming_platforms,
    //
    //     "streaming_platforms": [
    // {
    // "type": "twitch",
    // "channel_url": "https://twitch.tv/gmmarkusragger"
    // }
    // ]
  } = data;
  const countryCode = country?.split('/').pop()?.toUpperCase() ?? '';

  const getFlagImageUrl = (code: string) =>
    `https://flagcdn.com/24x18/${code.toLowerCase()}.png`;

  return (
    <div className="p-6 flex flex-col items-center space-y-4">
      <Card className="w-full max-w-md border border-[var(--border)] bg-[var(--card)] text-[var(--card-foreground)] shadow-xl">
        <CardHeader className="flex items-center gap-4">
          {avatar ? (
            <Image
              src={avatar}
              alt={username}
              width={80}
              height={80}
              className="rounded-full"
            />
          ) : (
            <div className="w-[80px] h-[80px] bg-muted rounded-full" />
          )}
          <div>
            <CardTitle className="text-xl">{name || username}</CardTitle>
            <div className="text-sm text-muted-foreground">@{username}</div>
            {verified && (
              <Badge
                variant="secondary"
                className="bg-blue-500 text-white dark:bg-blue-600"
              >
                <BadgeCheckIcon size={8} strokeWidth={1} absoluteStrokeWidth />
                Verified
              </Badge>
            )}
            {verified && title && <> </>}
            {title && (
              <Badge variant="default" className="mt-1">
                {title}
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>
            <span className="font-semibold">Status:</span> {status}
          </p>
          {is_streamer && (
            <Badge variant="secondary" className="mt-1">
              Streamer
            </Badge>
          )}
          {streaming_platforms && streaming_platforms.length > 0 && (
            <div className="mt-2">
              {streaming_platforms.map(
                (platform: { type: string; channel_url: string }) => (
                  <Button key={platform.type} variant="outline" asChild>
                    <a
                      href={platform.channel_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {platform.type}
                    </a>
                  </Button>
                )
              )}
            </div>
          )}
          {followers && (
            <p>
              <span className="font-semibold">Followers:</span> {followers}
            </p>
          )}
          {league && (
            <p>
              League:{' '}
              <Badge variant="outline" className="mt-1">
                {league}
              </Badge>
            </p>
          )}
          <p className="flex items-center gap-2">
            <span className="font-semibold">Country:</span>
            {countryCode ? (
              <>
                <Image
                  src={getFlagImageUrl(countryCode)}
                  alt={countryCode}
                  width={24}
                  height={18}
                  title={countryCode}
                />
                <span>({countryCode})</span>
              </>
            ) : (
              'Unknown'
            )}
          </p>
          <p>
            <span className="font-semibold">Last online:</span>{' '}
            <TimeSinceLastOnline lastOnlineTimestamp={last_online} />
          </p>
        </CardContent>
        <CardFooter className="justify-end">
          <a
            href={`https://www.chess.com/member/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)] hover:underline text-sm"
          >
            View on Chess.com →
          </a>
        </CardFooter>
      </Card>

      <Button
        variant="outline"
        className="mt-2 text-sm"
        onClick={() => router.back()}
      >
        ← Volver
      </Button>
    </div>
  );
}
