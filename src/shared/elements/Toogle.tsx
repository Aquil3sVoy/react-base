import { Switch } from '@headlessui/react';
import {
  LightBulbIcon,
  MoonIcon,
} from '@heroicons/react/24/outline';
import { utils } from '../../utils/utils';

export default function Example({
  enabled = false,
  setEnabled,
}: {
  enabled: boolean;
  setEnabled: () => void;
}) {
  return (
    <Switch
      data-testid="switch-to-dark-mode"
      checked={enabled}
      onChange={setEnabled}
      className={utils.classNames(
        enabled ? 'bg-indigo-600' : 'bg-gray-200',
        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
      )}
    >
      <span className="sr-only">Dark Mode</span>
      <span
        className={utils.classNames(
          enabled ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
        )}
      >
        <span
          className={utils.classNames(
            enabled
              ? 'opacity-0 duration-100 ease-out'
              : 'opacity-100 duration-200 ease-in',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
          )}
          aria-hidden="true"
        >
          <LightBulbIcon className="h-3 w-3" />
        </span>
        <span
          className={utils.classNames(
            enabled
              ? 'opacity-100 duration-200 ease-in'
              : 'opacity-0 duration-100 ease-out',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
          )}
          aria-hidden="true"
        >
          <MoonIcon className="h-3 w-3 text-indigo-600" />
        </span>
      </span>
    </Switch>
  );
}
