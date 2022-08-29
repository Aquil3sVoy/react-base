import { Switch } from '@headlessui/react'
import { LightBulbIcon, MoonIcon } from '@heroicons/react/24/outline'
import { utils } from '../../utils/utils'

export default function Example({
  enabled = false,
  setEnabled,
}: {
  enabled: boolean
  setEnabled: () => void
}) {
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={utils.classNames(
        enabled ? 'bg-indigo-600' : 'bg-gray-200',
        'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      )}
    >
      <span className="sr-only">Dark Mode</span>
      <span
        className={utils.classNames(
          enabled ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
        )}
      >
        <span
          className={utils.classNames(
            enabled
              ? 'opacity-0 ease-out duration-100'
              : 'opacity-100 ease-in duration-200',
            'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
          )}
          aria-hidden="true"
        >
          <LightBulbIcon className="h-3 w-3" />
        </span>
        <span
          className={utils.classNames(
            enabled
              ? 'opacity-100 ease-in duration-200'
              : 'opacity-0 ease-out duration-100',
            'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
          )}
          aria-hidden="true"
        >
          <MoonIcon className="h-3 w-3 text-indigo-600" />
        </span>
      </span>
    </Switch>
  )
}
