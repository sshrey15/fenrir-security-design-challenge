

import ScanPage from "@/features/dashboard/scans/page";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  return (
    <>
      {slug === 'scans' && <ScanPage/>}
      {slug !== 'scans' && (
        <div className="flex flex-col items-center justify-center h-full min-h-[60vh] gap-4">
          <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400">
              <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white capitalize">
            {slug.replace(/-/g, ' ')}
          </h2>
          <p className="text-sm text-gray-400">
            This page is under development. Check back soon.
          </p>
        </div>
      )}

      
    </>
  );
}