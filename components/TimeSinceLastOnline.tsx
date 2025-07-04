import { useState, useEffect } from 'react';

type Props = {
  lastOnlineTimestamp: number;
};

function TimeSinceLastOnline({ lastOnlineTimestamp }: Props) {
  const [timeDiff, setTimeDiff] = useState(0);

  useEffect(() => {
    const lastOnlineDate = new Date(lastOnlineTimestamp * 1000);

    const updateDiff = () => {
      const now = new Date();
      const diffSeconds = Math.max(
        0,
        Math.floor((now.getTime() - lastOnlineDate.getTime()) / 1000)
      );
      setTimeDiff(diffSeconds);
    };

    updateDiff();

    const interval = setInterval(updateDiff, 1000);
    return () => clearInterval(interval);
  }, [lastOnlineTimestamp]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  return <span>{formatTime(timeDiff)}</span>;
}

export default TimeSinceLastOnline;
