import { LogOut } from 'lucide-react';
import SignOutWrapper from '../footer-nav/SignOutWrapper';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '../ui/dropdown-menu';
import { UserMetadata } from '@supabase/supabase-js';
import Link from 'next/link';

type AvatarMenuProps = {
  user: UserMetadata | undefined;
};

const AvatarMenu = ({ user }: AvatarMenuProps) => {
  return (
    <DropdownMenuContent className='mx-1'>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuItem>
        <span className='text-muted-foreground text-sm line-clamp-1 max-w-40'>
          {user?.email}
        </span>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Link href={'/create-post'}>Create Post</Link>
      </DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
      <DropdownMenuItem>Team</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <SignOutWrapper>
          <LogOut className='mr-2 h-4 w-4' />
          <span>Log out</span>
        </SignOutWrapper>
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
};
export default AvatarMenu;
