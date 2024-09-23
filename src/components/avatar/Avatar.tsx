import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { getUser } from '@/utils/supabase/server';
import AvatarMenu from './AvatarMenu';
import { UserMetadata } from '@supabase/supabase-js';

const UserAvatar = async () => {
  const user = (await getUser())?.user_metadata as UserMetadata | undefined;

  console.log(user);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {' '}
        <Avatar className=''>
          <AvatarImage src={user!.avatar_url} />
          <AvatarFallback>{user?.name?.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <AvatarMenu user={user} />
    </DropdownMenu>
  );
};
export default UserAvatar;
