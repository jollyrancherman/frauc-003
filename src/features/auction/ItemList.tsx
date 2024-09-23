import AuctionItem from '@/features/auction/AuctionItem';

const ItemList = async () => {
  const res = await fetch('https://dummyjson.com/products?limit=50');
  const { products: items } = await res.json();
  return (
    <div className='max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-7 gap-3 p-3 pb-24'>
      {items && items.map((item) => <AuctionItem key={item.id} item={item} />)}
    </div>
  );
};
export default ItemList;
