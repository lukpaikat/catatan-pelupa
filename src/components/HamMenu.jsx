import React from 'react';
import { PushPin, Archive } from 'phosphor-react';
import HamItemNavLink from './buttons/HamItemNavLink';
import { HOME, ARCHIVE } from '../config/paths';

function HamMenu() {
  return (
    <div className="absolute top-full right-0 mt-2
    bg-white-background-color semi-and-dark:bg-gray-700
    shadow-md rounded-lg lg:hidden"
    >
      <h1 className="p-2 text-gray-text-color text-center semi-and-dark:text-white-text-color">
        Catatan
        <br />
        User name
      </h1>
      <ul className="flex flex-col transition-all p-1">
        <li>
          <HamItemNavLink
            to={HOME}
            aria-label="catatan aktif"
            end
            title="Catatan Aktif"
            icon={<PushPin />}
          />
        </li>
        <li>
          <HamItemNavLink
            to={ARCHIVE}
            aria-label="catatan arsip"
            end
            title="Catatan arsip"
            icon={<Archive />}
          />
        </li>
      </ul>
    </div>
  );
}

export default HamMenu;
