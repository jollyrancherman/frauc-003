'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,

//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select';

import { Camera, Circle } from 'lucide-react';
import FileUpload from './FileUpload';

const CreatePostPage = () => {
  const createPost = () => {
    console.log('create post');
  };
  return (
    <div className='p-2'>
      {/* CREATE POST */}

      {/* HEADER */}
      <div className='text-center p-2 border-b'>
        <h1 className='font-semibold'>Create Post</h1>
        <p className='text-sm text-gray-700'>List your item</p>
      </div>

      {/* PHOTOS TEST */}
      <FileUpload />

      {/* ITEM DETAILS */}
      <div className='space-y-4 mt-6'>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label htmlFor='title'>Title</Label>
          <Input id='title' type='text' name='title' />
        </div>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label htmlFor='description'>Description</Label>
          <Textarea id='description' name='description' cols={5} />
        </div>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label htmlFor='location'>Location</Label>
          <Input id='location' type='text' name='location' />
        </div>
        <div className='flex'>
          {/* <Select>
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='Condition' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value='new'>New</SelectItem>
                <SelectItem value='used-great'>
                  Used: Great Condition
                </SelectItem>
                <SelectItem value='used-good'>Used: Good Condition</SelectItem>
                <SelectItem value='used-fair'>Used: Fair Condition</SelectItem>
                <SelectItem value='not-working'>Not Working</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select> */}
        </div>

        <div>
          <Button
            variant='primary'
            size='lg'
            className='w-full'
            onClick={createPost}
          >
            Next
          </Button>
        </div>

        <div className='flex flex-col gap-2 text-gray-800'>
          <h2 className='font-semibold text-sm'>Post Strategy:</h2>
          <p className='text-sm leading-3 text-muted-foreground'>
            Select how you would like to sell your items.
          </p>

          <div className='border border-gray-200 rounded-sm w-full py-2 px-3 bg-sky-200'>
            <h2 className='font-semibold text-sm flex gap-2 items-center'>
              <Circle className='h-4 w-4 ' />
              Strategy: Frauc It
            </h2>
            <p className='text-muted-foreground text-sm'>
              An auction format that starts at free. Buyer can then make offers
              to buy the item up until the auction ends.
            </p>
          </div>

          <div className='border border-gray-200 rounded-sm w-full py-2 px-3'>
            <h2 className='font-semibold text-sm'>For Sale</h2>
            <p className='text-muted-foreground text-sm'>
              You post an item for sale with an asking price. Buyers can then
              buy the item at the asking price.
            </p>
          </div>

          <div className='border border-gray-200 rounded-sm w-full py-2 px-3'>
            <h2 className='font-semibold text-sm'>Reverse Auction</h2>
            <p className='text-muted-foreground text-sm'>
              Post the item for sale with a starting price. The price then
              lowers until a buyer decides to buy the item.
            </p>
          </div>

          <div className='border border-gray-200 rounded-sm w-full py-2 px-3'>
            <h2 className='font-semibold text-sm'>Free</h2>
            <p className='text-muted-foreground text-sm'>
              Use this option if you want to give away your item for free
              without the option for buyers to make offers.
            </p>
          </div>
        </div>
      </div>

      {/* AUCTION DETAILS */}
    </div>
  );
};
export default CreatePostPage;
