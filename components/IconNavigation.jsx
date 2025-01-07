import React from 'react';
import { Copy, Bookmark, Lightbulb, Share2, History } from 'lucide-react';

const IconNavigation = () => {
  const iconSize = 20;
  const iconColor = "#71717a"; // zinc-500 for a neutral gray color

  return (
    <div className="flex gap-4 items-center">
      <button className="p-2 hover:bg-zinc-100 rounded-lg transition-colors">
        <Copy size={iconSize} color={iconColor} />
      </button>
      <button className="p-2 hover:bg-zinc-100 rounded-lg transition-colors">
        <Bookmark size={iconSize} color={iconColor} />
      </button>
      <button className="p-2 hover:bg-zinc-100 rounded-lg transition-colors">
        <Lightbulb size={iconSize} color={iconColor} />
      </button>
      <button className="p-2 hover:bg-zinc-100 rounded-lg transition-colors">
        <Share2 size={iconSize} color={iconColor} />
      </button>
      <button className="p-2 hover:bg-zinc-100 rounded-lg transition-colors">
        <History size={iconSize} color={iconColor} />
      </button>
    </div>
  );
};

export default IconNavigation;