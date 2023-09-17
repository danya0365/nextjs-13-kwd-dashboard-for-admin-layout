'use client';

import UserDropdownMenuView from './user-dropdown-menu/view';
import useViewModel from './view-model';

const UserMenuView = () => {
  const { isOpen, toggleIsOpenCallback, buttonRef, userDropdownMenuRef } =
    useViewModel();
  return (
    <>
      <button
        ref={buttonRef}
        onClick={toggleIsOpenCallback}
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen ? 'true' : 'false'}
        className="block rounded-full transition-opacity duration-200 focus:outline-none focus:ring dark:opacity-75 dark:hover:opacity-100 dark:focus:opacity-100"
      >
        <span className="sr-only">User menu</span>
        <img
          className="h-10 w-10 rounded-full"
          src="https://avatars.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4"
          alt="Ahmed Kamel"
        />
      </button>
      <UserDropdownMenuView ref={userDropdownMenuRef} isOpen={isOpen} />
    </>
  );
};

export default UserMenuView;
