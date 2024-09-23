import { Item } from '@/types/Items';
import Image from 'next/image';

import Link from 'next/link';

const AuctionItem = ({ item }: { item: Item }) => {
  return (
    <Link href={`/post/${item.id}`} className='group'>
      <div className='aspect-square relative overflow-hidden rounded-sm shadow-sm object-cover'>
        <Image
          alt={item.title}
          src={item.thumbnail}
          fill
          sizes='50vw'
          // TODO: Fix issue where image loading doesnt resize after initial render
          className=' bg-white group-hover:opacity-75 group-hover:scale-105 transition-all'
        />
      </div>
      <div className='py-1 text-neutral-800'>
        <div className='flex flex-row justify-between items-center gap-2 '>
          <div>${item.price}</div>
          <div className='text-xs font-bold'>AUCTION</div>
        </div>
        <div className='truncate group-hover:underline'>{item.title}</div>
        <div className='text-gray-500 text-xs '>{item.category}</div>
      </div>
    </Link>
  );
};
export default AuctionItem;
