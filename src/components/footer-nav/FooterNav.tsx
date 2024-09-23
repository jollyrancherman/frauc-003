import { Filter, Search } from 'lucide-react';
import SignInButton from './SignInButton';
import { Button } from '../ui/button';
// import ManageGeolocation from '@/features/geolocation/ManageGeolocation';
import { getUser } from '@/utils/supabase/server';
import UserAvatar from '../avatar/Avatar';

const FooterNav = async () => {
  const user = await getUser();

  return (
    <>
      {/* <ManageGeolocation /> */}

      <div className='px-4 py-2 border border-t-gray-200 bg-white'>
        <div className='flex justify-between items-center'>
          {!user ? <SignInButton /> : <UserAvatar />}
          <div className='space-x-4'>
            <Button variant='ghost' size='icon'>
              <Filter size={24} />
            </Button>

            <Button variant='ghost' size='icon'>
              <Search size={24} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default FooterNav;
