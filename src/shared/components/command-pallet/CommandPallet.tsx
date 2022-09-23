import {
  Dialog,
  Combobox,
  Transition,
} from '@headlessui/react';
import { useState, useEffect, Fragment } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function CommandPallet({
  projects,
}: {
  projects: any;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const filteredProjects = query
    ? projects.filter((project: any) =>
        project.title
          .toLowerCase()
          .includes(query.toLowerCase())
      )
    : [];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        (event.key === 'k' && event.metaKey) ||
        event.ctrlKey
      ) {
        setIsOpen(!isOpen);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <Transition.Root
      show={isOpen}
      as={Fragment}
      afterLeave={() => setQuery('')}
    >
      <Dialog
        onClose={setIsOpen}
        className="fixed inset-0 overflow-y-auto py-4 pt-[24vh]"
      >
        <Transition.Child
          enter="duration-300 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-500/75" />
        </Transition.Child>
        <Transition.Child
          enter="duration-300 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Combobox
            value=""
            onChange={(project: any) => {
              // add path with react-router push()
              setIsOpen(false);
              window.location.href = project.path;
            }}
            as="div"
            className="relative mx-auto max-w-xl divide-y divide-gray-200 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/5"
          >
            <div className="flex items-center px-4">
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />

              <Combobox.Input
                className="h-12 w-full border-0 bg-transparent text-sm text-gray-800 placeholder-gray-500 focus:right-0"
                placeholder="Search for a project"
                onChange={(
                  event: React.ChangeEvent<HTMLInputElement>
                ) => setQuery(event.target.value)}
              />
            </div>
            {filteredProjects.length > 0 && (
              <Combobox.Options
                static
                className="max-h-96 overflow-y-auto p-4 text-sm "
              >
                {filteredProjects.map((project: any) => (
                  <div key={project.id}>
                    <Combobox.Option
                      value={project}
                      className="text-sm text-gray-800"
                    >
                      {({ active }) => (
                        <div
                          className={`space-x-1 px-4 py-2 ${
                            active
                              ? 'bg-indigo-600'
                              : 'bg-white'
                          }`}
                        >
                          <span
                            className={`font-medium ${
                              active
                                ? 'text-white'
                                : 'text-gray-900'
                            }`}
                          >
                            {project.title}
                          </span>
                          <span
                            className={
                              active
                                ? 'text-gray-200'
                                : 'text-gray-400'
                            }
                          >
                            {project.title}
                          </span>
                        </div>
                      )}
                    </Combobox.Option>
                  </div>
                ))}
              </Combobox.Options>
            )}
            {query && filteredProjects.length === 0 && (
              <p className="p-4 text-sm text-gray-400 ">
                No result found.
              </p>
            )}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
}
